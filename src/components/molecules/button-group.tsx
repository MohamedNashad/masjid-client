import { ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react';
import { RiSplitCellsHorizontal, RiTableLine, RiNodeTree } from 'react-icons/ri';
import { useState } from 'react';

interface ViewButtonGroupProps {
  currentView?: number;
}

const ViewButtonGroup: React.FC<ViewButtonGroupProps> = ({ currentView }) => {
  return (
    <ButtonGroup variant={"outline"}>
      <Tooltip label={"Split View"} bg="brandPrimary.300" color="white">
        <IconButton
          aria-label="Split View"
          icon={<RiSplitCellsHorizontal size={"1.5rem"} />}
          onClick={() => {}}
          variant={currentView === 2 ? "solid" : "outline"}
          colorScheme={"brandPrimary"}
          size={"lg"}
          bg={currentView === 2 ? "brandPrimary.500" : "white"}
          borderColor={currentView === 2 ? "brandPrimary.500" : "gray.300"}
        />
      </Tooltip>
      <Tooltip label={"Currently Working View"} bg="brandPrimary.300" color="white">
        <IconButton
          aria-label="Currently Working View"
          icon={<RiTableLine size={"1.5rem"} />}
          onClick={() => {}}
          variant={currentView === 0 ? "solid" : "outline"}
          colorScheme={"brandPrimary"}
          size={"lg"}
          bg={currentView === 0 ? "brandPrimary.500" : "white"}
          borderColor={currentView === 0 ? "brandPrimary.500" : "gray.300"}
        />
      </Tooltip>
      <Tooltip label="Drill Down View" bg="brandPrimary.300" color="white">
        <IconButton
          aria-label="Drill-down View"
          icon={<RiNodeTree size={"1.5rem"} />}
          onClick={() => {}}
          variant={currentView === 1 ? "solid" : "outline"}
          colorScheme={"brandPrimary"}
          size={"lg"}
          bg={currentView === 1 ? "brandPrimary.500" : "white"}
          borderColor={currentView === 1 ? "brandPrimary.500" : "gray.300"}
        />
      </Tooltip>
    </ButtonGroup>
  );
};

export default ViewButtonGroup;
