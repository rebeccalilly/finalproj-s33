import React, { useState, useRef, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
  Input,
} from "@material-tailwind/react";
import Draggable from "react-draggable";
import { ChromePicker } from "react-color";

function PencilIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 mr-2"
    >
      <path
        fillRule="evenodd"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ListWithIcon() {
  const [items, setItems] = useState(["Item One", "Item Two", "Item Three"]);
  const [editableItemIndex, setEditableItemIndex] = useState(-1);
  const [newItemName, setNewItemName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [boxColor, setBoxColor] = useState("#E8E6E6");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const [itemCount, setItemCount] = useState(items.length + 1);

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditableItemIndex(index);
    setNewItemName(items[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = newItemName;
    setItems(updatedItems);
    setEditableItemIndex(-1);
  };

  const handleColorChange = (color) => {
    setBoxColor(color.hex);
  };

  const bounds = { left: -700 };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const toggleTextColorPicker = () => {
    setShowTextColorPicker(!showTextColorPicker);
  };

  const handleAddItem = () => {
    const newItem = `Item ${itemCount}`;
    setItems([...items, newItem]);
    setItemCount(itemCount + 1);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setShowColorPicker(false);
        setShowTextColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (items.length === 0) {
    return null;
  }

  const colorPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        setShowColorPicker(false);
        setShowTextColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Draggable bounds={bounds} cancel=".chrome-picker, .saturation-guider">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Card className="w-96" style={{ backgroundColor: boxColor }}>
          <List>
            {items.map((item, index) => (
              <ListItem key={index} ripple={false} className="py-1 pr-1 pl-4">
                {editableItemIndex === index ? (
                  <Input
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSaveEdit(index);
                    }}
                    onBlur={() => handleSaveEdit(index)}
                    onFocus={() => setIsEditing(true)}
                    autoFocus
                    className={`outline-gray ring-2 ring-gray-500 bg-gray-300 ${
                      isEditing ? "bg-gray-100" : ""
                    }`}
                  />
                ) : (
                  <>
                    <span style={{ color: textColor }}>{item}</span>
                    <ListItemSuffix className="flex">
                      <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={() => handleEditItem(index)}
                      >
                        <PencilIcon />
                      </IconButton>
                      <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={() => handleDeleteItem(index)}
                      >
                        <TrashIcon />
                      </IconButton>
                      {index === items.length - 1 && (
                        <IconButton onClick={handleAddItem}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
                          </svg>
                        </IconButton>
                      )}
                    </ListItemSuffix>
                  </>
                )}
              </ListItem>
            ))}
          </List>
          <div className="flex justify-end relative">
            <div className="flex justify-end relative z-20">
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={toggleColorPicker}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9" />
                </svg>
              </IconButton>
            </div>
            {showColorPicker && (
              <div
                ref={colorPickerRef}
                className="chrome-picker absolute bottom-0 left-0 ml-2 mb-2"
              >
                <ChromePicker color={boxColor} onChange={handleColorChange} />
              </div>
            )}
            {/**/}
            <div className="flex justify end relative">
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={toggleTextColorPicker}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" />
                </svg>
              </IconButton>
            </div>
            {showTextColorPicker && (
              <div
                ref={colorPickerRef}
                className="chrome-picker absolute bottom-0 left-0 ml-2 mb-2"
              >
                <ChromePicker
                  color={textColor}
                  onChange={handleTextColorChange}
                />
              </div>
            )}
          </div>
        </Card>
      </div>
    </Draggable>
  );
}
