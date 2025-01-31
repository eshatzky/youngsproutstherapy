import { useState, useRef } from "react";
import Link from "next/link";
import Text from "../atom/Text";
import { cn } from "@/lib/utils";

interface SubmenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface SubmenuGroup {
  label: string;
  items: SubmenuItem[];
}

interface CustomSubmenuProps {
  label: string;
  items: (SubmenuItem | SubmenuGroup)[];
  isOpen: boolean;
  onOpen: () => void;
  setOpenMenu: (value: boolean) => void;
}

export function CustomSubmenu({
  label,
  items,
  isOpen,
  onOpen,
  setOpenMenu,
}: CustomSubmenuProps) {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!menuRef.current?.matches(":hover")) {
        setActiveSubmenu(null);
      }
    }, 1000);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      if (!menuRef.current?.matches(":hover")) {
        setActiveSubmenu(null);
        setOpenMenu(false);
      }
    }, 1000);
  };

  const handleClose = () => {
    setActiveSubmenu(null);
    setOpenMenu(false);
  };

  return (
    <div
      ref={menuRef}
      className="relative z-[50]"
      onMouseEnter={() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }}
      onMouseLeave={closeMenu} // Close the menu when mouse leaves
    >
      <button
        className="flex items-center gap-1.5 cursor-pointer focus:outline-none z-[49]"
        onClick={onOpen}
        aria-label="navmenu"
        onMouseEnter={onOpen}
      >
        <Text
          type="p"
          size="medium"
          className={cn(
            "flex items-center gap-1.5 cursor-pointer",
            isOpen ? "text-primary" : ""
          )}
        >
          {label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M5 5.5L0.669873 0.25L9.33013 0.250001L5 5.5Z"
              fill={isOpen ? "#ab7574" : "#A79AA1"}
            />
          </svg>
        </Text>
      </button>
      {isOpen && (
        <div className="absolute left-0 w-64 bg-white shadow-lg rounded-md border py-2 z-[9999]">
          {items.map((item, index) =>
            "items" in item ? (
              <div
                key={index}
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={cn(
                    "relative px-4 py-2",
                    activeSubmenu === item.label && "text-primary",
                    "hover:bg-[#F7F0F0]"
                  )}
                >
                  <Text
                    type="p"
                    size="small"
                    className="flex items-center justify-between"
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={cn(
                        activeSubmenu === item.label && "text-primary",
                        "hover:text-primary"
                      )}
                    >
                      <path
                        d="M0 5L5 10L10 5"
                        fill="#A79AA1"
                        transform="rotate(-90 5 5)"
                      />
                    </svg>
                  </Text>
                </div>
                {activeSubmenu === item.label && (
                  <div className="absolute left-full top-0 mt-0 ml-[1px] w-64 bg-white shadow-lg border rounded-md py-2 z-50">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        aria-label={subItem.label}
                        key={subIndex}
                        href={subItem.href}
                        className="px-4 py-2 flex items-center gap-2 hover:bg-[#F7F0F0] hover:!text-primary"
                        onClick={handleClose} // Close menu on click
                      >
                        {subItem.icon && (
                          <span className="w-5 h-5">{subItem.icon}</span>
                        )}
                        <Text
                          type="p"
                          size="small"
                          className="hover:!text-primary"
                        >
                          {subItem.label}
                        </Text>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                aria-label={item.label}
                href={item.href}
                className="px-4 py-2 flex items-center gap-2 hover:bg-[#F7F0F0] hover:!text-primary"
                onClick={handleClose} // Close menu on click
              >
                {item.icon && <span className="w-5 h-5">{item.icon}</span>}
                <Text type="p" size="small">
                  {item.label}
                </Text>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
