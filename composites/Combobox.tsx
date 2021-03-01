import React, { useState } from 'react'
import { useCombobox, useMultipleSelection } from 'downshift'
import { styled } from '../stitches.config'
import starWarsNames from 'starwars-names'

const items: string[] = starWarsNames.all.map((name: string) => name)

export const Combobox: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({ initialSelectedItems: [items[0], items[1]] })

  const getFilteredItems = () => items.filter(item =>
    selectedItems.indexOf(item) < 0 &&
    item.toLowerCase().startsWith(inputValue.toLowerCase()),
  )

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    inputValue,
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    items: getFilteredItems(),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
          }
      }
      return changes
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
          }
          break
        default:
          break
      }
    },
  })

  return (
    <Wrapper>
      <StyledBox>
        {selectedItems.map((selectedItem, index) => (
          <SelectedItem
            key={`selected-item-${index}`}
            {...getSelectedItemProps({ selectedItem, index })}
          >
            {selectedItem}
            <SelectedItemIcon
              onClick={e => {
                e.stopPropagation()
                removeSelectedItem(selectedItem)
              }}
            >
              &#10005;
            </SelectedItemIcon>
          </SelectedItem>
        ))}
        <StyledCombobox {...getComboboxProps()}>
          <Input
            {...getInputProps(
              getDropdownProps({ preventKeyAction: isOpen }),
            )}
          />
          <InputButton {...getToggleButtonProps()} aria-label={'toggle menu'}>
            &#8595;
          </InputButton>
        </StyledCombobox>
      </StyledBox>
      <Menu {...getMenuProps()}>
        {isOpen && getFilteredItems().map((item, index) => (
            <MenuItem
              // data-selected={highlightedIndex === index ? true : undefined}
              style={
                highlightedIndex === index
                  ? { backgroundColor: '#bde4ff' }
                  : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </MenuItem>
          ))}
      </Menu>
    </Wrapper>
  )
}

const Wrapper = styled('div', {
  position: 'relative',
  width: '100%'
})

const StyledBox = styled('div', {
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: 56,
  background: '#fff',
  borderRadius: 16,
  border: '1px solid #eaeaea',
  fontSize: 'inherit',
  color: 'black',
  cursor: 'text',
  outline: 0,
  padding: 0,
  '&:focus-within': {
    borderColor: 'black'
  }
})

const StyledCombobox = styled('div', {
  display: 'flex', 
  alignItems: 'center',
  flexGrow: 1,
  marginLeft: '5px',
  height: '100%'
})

const Input = styled('input', {
  display: 'inline-block',
  flexGrow: 1,
  height: '100%',
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none'
})

const InputButton = styled('button', {
  flexShrink: 0,
})

const SelectedItem = styled('span', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5px',
  backgroundColor: 'aliceblue',
  borderRadius: 999,
  padding: '0 $2 0 $3',
  height: 32,
  flexShrink: 0,
})

const SelectedItemIcon = styled('span', {
  cursor: 'pointer',
  marginLeft: '$2'
})

const Menu = styled('ul', {
  display: 'absolute',
  maxHeight: '180px',
  overflowY: 'auto',
  left: 0,
  right: 0,
  margin: 0,
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  zIndex: 1000,
  listStyle: 'none',
  padding: 0,
  borderRadius: 16,
})

const MenuItem = styled('li', {
  // '&[data-selected]': {
  //   backgroundColor: '#bde4ff' 
  // }
})