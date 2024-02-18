'use client';

import { useContext, useState, useMemo } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { RiSettings5Fill } from 'react-icons/ri';
import { Theme, type ThemeProps } from '@/types/globals';
import { Selection } from '@react-types/shared';

import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { currentTheme, toggle, nextTheme } = useContext(ThemeContext);
  const [selectedKeys, setSelectedKeys] = useState(new Set([Theme.auto]));

  const handleSelectionChange = (keys: Selection): void => {
    const selectedSet = new Set(keys as Iterable<ThemeProps>);
    setSelectedKeys(selectedSet);
    handleChange();
  };

  const selectedIcon = useMemo(() => {
    switch (currentTheme) {
      case Theme.light:
        return <BsSunFill />;
      case Theme.dark:
        return <BsMoonFill />;
      case Theme.auto:
      default:
        return <RiSettings5Fill />;
    }
  }, [currentTheme]);

  const handleChange = () => {
    toggle();
    fetch('/theme', {
      method: 'POST',
      body: JSON.stringify({ theme: nextTheme }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  };

  return (
    // <form onSubmit={onSubmit}>
    //   <input type="hidden" value={nextTheme} name="next-theme" />
    //   <button>toggle theme</button>
    // </form>
    <Dropdown size="sm" className="min-w-0 p-0">
      <DropdownTrigger className="min-w-0">
        <Button variant="faded" color="primary">
          {selectedIcon}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select light or dark mode"
        variant="light"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
        className="w-auto"
      >
        <DropdownItem
          hideSelectedIcon
          key={Theme.light}
          className="pb-1 px-0 pt-0"
          textValue={Theme.light}
        >
          <Button
            color="default"
            variant="light"
            isIconOnly
            aria-label={`${Theme.light} theme`}
          >
            <BsSunFill />
          </Button>
        </DropdownItem>
        <DropdownItem
          textValue={Theme.dark}
          hideSelectedIcon
          key={Theme.dark}
          className="p-0"
        >
          <Button
            color="default"
            variant="light"
            isIconOnly
            aria-label={`${Theme.dark} theme`}
          >
            <BsMoonFill />
          </Button>
        </DropdownItem>
        {/* <DropdownItem
          hideSelectedIcon
          textValue={Theme.auto}
          key={Theme.auto}
          className="pt-1 pb-0 px-0"
        >
          <Button
            color="default"
            variant="light"
            isIconOnly
            aria-label={`${Theme.auto} theme`}
          >
            <RiSettings5Fill />
          </Button>
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
    // <Switch
    //   // isSelected={theme === 'dark' && isClient} // Use isClient here to control the selected state - isMounted
    //   isSelected
    //   onChange={toggleTheme}
    //   size="lg"
    //   color="success"
    //   startContent={<BsSunFillFill />}
    //   endContent={<FaMoon />}
    //   disabled={!isClient}
    //   className={!isClient ? 'cursor-not-allowed' : ''}
    // />
  );
};

export default ThemeToggle;
