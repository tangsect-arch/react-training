import React from "react";
import "./Modal.css";

const Modal = ({
  newTitle,
  newEntries,
  isAdd,
  handleTitleChange,
  handleEntriesChange,
  handleSaveChanges,
  handleClose,
  handleAddEntry,
  handleDeleteEntry,
  handleCheckboxChange,
  isChecked,
}) => {
  const modalTitle = isAdd ? "Add Todo" : "Edit Todo";
  console.log(isChecked);
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{modalTitle}</h3>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={newTitle ?? ""}
            onChange={handleTitleChange}
            placeholder="Edit title"
          />
        </div>
        <div>
          <label>Entries</label>
          <div className="entries">
            {newEntries.map((entry, index) => {
              return (
                <div key={index} className="entry-item">
                  <input
                    type="text"
                    value={entry}
                    onChange={(e) => handleEntriesChange(e, index)}
                    placeholder="Edit entries"
                  />
                  <div
                    className="modal-delete-label"
                    onClick={() => handleDeleteEntry(index)}
                  >
                    x
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="checkbox-container">
          <input
            className="storage-check-box"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id="todo-checkbox"
          />
          <label htmlFor="todo-checkbox">Local Storage</label>
        </div>
        <div className="buttons-container">
          <div className="add-entry" onClick={handleAddEntry}>
            Add new entry
          </div>
          <div className="save-cancel-buttons">
            <button onClick={() => handleSaveChanges(isAdd)}>Save</button>
            <button className="cancel" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
