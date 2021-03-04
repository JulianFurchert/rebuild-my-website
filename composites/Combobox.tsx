import React, { useState } from 'react'
import { useCombobox, useMultipleSelection } from 'downshift'
import { IconButton } from '../components';
import { styled } from '../stitches.config'
import starWarsNames from 'starwars-names'
import { X, ArrowDown } from 'react-feather';

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

  const filteredItems = items.filter(item =>
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
    items: filteredItems,
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
            <SelectedItemLabel>
              {selectedItem}
            </SelectedItemLabel>
            <SelectedItemIcon
              onClick={e => {
                e.stopPropagation()
                removeSelectedItem(selectedItem)
              }}
            >
              <X size={16} />
            </SelectedItemIcon>
          </SelectedItem>
        ))}
        <StyledCombobox {...getComboboxProps()}>
          <Input
            {...getInputProps(
              getDropdownProps({ preventKeyAction: isOpen }),
            )}
          />
          <IconButton {...getToggleButtonProps()} aria-label={'toggle menu'}>
            <ArrowDown />
          </IconButton>
        </StyledCombobox>
      </StyledBox>
      {isOpen && filteredItems.length > 0 && (
        <Menu {...getMenuProps()}>
          {filteredItems.map((item, index) => (
              <MenuItem
                data-selected={highlightedIndex === index ? true : undefined}
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </MenuItem>
            ))}
        </Menu>
      )}
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
  background: '$loContrast',
  borderRadius: 10,
  border: '1px solid',
  borderColor: '$gray4',
  fontSize: 'inherit',
  color: 'hiContrast',
  cursor: 'text',
  outline: 0,
  padding: 0,
  paddingLeft: '$2',
  paddingRight: '$2',
  '&:focus-within': {
    borderColor: '$hiContrast',
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

const SelectedItem = styled('span', {
  display: 'flex',
  alignItems: 'center',
  marginRight: '5px',
  backgroundColor: '$gray1',
  borderRadius: 10,
  height: 32,
  flexShrink: 0,
  overflow: 'hidden',
  outline: 'none',
  border: '1px solid',
  borderColor: '$gray1',
  '&:focus': {
    backgroundColor: '$gray2',
  }
})

const SelectedItemLabel = styled('span', {
  paddingLeft: '$2',
  paddingRight: '$1'
})

const SelectedItemIcon = styled('span', {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '$1',
  paddingRight: '$1',
  cursor: 'pointer',
  borderColor: '$gray4',
  height: '100%',
  '&:hover':{
    backgroundColor: '$gray2',
  },
  // '*:focus &':{
  //   backgroundColor: '$gray2',
  // },
})

const Menu = styled('ul', {
  display: 'absolute',
  maxHeight: '300px',
  overflowY: 'auto',
  left: 0,
  right: 0,
  top: 64,
  margin: 0,
  border: 0,
  backgroundColor: '$loContrast',
  position: 'absolute',
  zIndex: 1000,
  listStyle: 'none',
  borderRadius: 15,
  padding: '$3',
  boxShadow: '$medium'
})

const MenuItem = styled('li', {
  borderRadius: 10,
  padding: '$2 $2',
  '&[data-selected]': {
    backgroundColor: '$gray1' 
  }
})