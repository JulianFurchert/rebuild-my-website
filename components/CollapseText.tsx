import { useState, createContext, useContext } from 'react';
import { IconButton } from './IconButton';
import { TextButton } from './TextButton';
import { MoreHorizontal } from 'react-feather';
import { Tooltip } from './Tooltip';

type CollapseContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

const CollapseContext = createContext<CollapseContextType>([true, null])

export const CollapseText: React.FC = ({ children, ...props }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <CollapseContext.Provider value={[isCollapsed, setIsCollapsed]} >
      <div {...props}>
        {children}
      </div>
    </CollapseContext.Provider>
  )
}

export const CollapseTextHidden: React.FC = ({ children, ...props }) => {
  const [isCollapsed, setIsCollapsed] = useContext(CollapseContext);

  const handleOnClick = () => setIsCollapsed(false)

  if(isCollapsed){
    return(
      // <Tooltip content="Blending mode">
      <TextButton>
        {'[Read more]'}
      </TextButton>
        // <IconButton onClick={handleOnClick}>
        //   <MoreHorizontal />
        // </IconButton>
      // </Tooltip>
    )
  }

  return (
    <div {...props}>
      {children}
    </div>
  )
}