import { HiOutlineFilter } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import "./filter.css";
import { useData } from "../../context/data";
export const Filter = () => {
  const [filterState, setFilterState] = useState(false);
  const [show, setShow] = useState(true);
  const { dispatch, tagFilter, colorFilter } = useData();
  return (
    <div>
      <button
        className={`button button-filter ${
          filterState ? "button-primary" : "button-secondary"
        }`}
        onClick={() => setFilterState((state) => !state)}
      >
        <HiOutlineFilter /> Filters
      </button>
      {
        <div
          className={`filter-wrapper ${
            filterState ? "translate-0" : "translate-1000"
          }`}
        >
          <div className="flex-row space-between">
            <h2>Filters</h2>
            <h2 onClick={() => setFilterState(false)} className="cursor">
              <MdOutlineCancel />{" "}
            </h2>
          </div>
          <button
            className="button-clear"
            onClick={() => dispatch({ type: "RESET_FILTER" })}
          >
            CLEAR
          </button>
          <div>
            <h3>Tags</h3>
            <div className="flex-col">
              {Object.keys(tagFilter).map((value) => {
                return (
                  <label key={value}>
                    <input
                      type="checkbox"
                      checked={tagFilter[value]}
                      onChange={() =>
                        dispatch({ type: "UPDATE_TAG", payload: value })
                      }
                    />
                    {value}
                  </label>
                );
              })}
            </div>
          </div>
          <div>
            <h3>Priorty</h3>
            <div className="flex-col">
              <label>
                <input
                  type="radio"
                  name="priorty"
                  onChange={() =>
                    dispatch({ type: "UPDATE_PRIORTY", payload: "high" })
                  }
                />{" "}
                High
              </label>
              <label>
                <input
                  type="radio"
                  name="priorty"
                  onChange={() =>
                    dispatch({ type: "UPDATE_PRIORTY", payload: "medium" })
                  }
                />{" "}
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  name="priorty"
                  onChange={() =>
                    dispatch({ type: "UPDATE_PRIORTY", payload: "low" })
                  }
                />{" "}
                Low
              </label>
            </div>
          </div>
          {show && (
            <h4 className="color-primary cursor" onClick={() => setShow(false)}>
              show more...
            </h4>
          )}
          {!show && (
            <div>
              <h3>Colors</h3>
              <div className="flex-col">
                {Object.keys(colorFilter).map((colorNumber) => {
                  return (
                    <label className="flex-row" key={colorNumber}>
                      <input
                        type="checkbox"
                        checked={colorFilter[colorNumber]}
                        onChange={() =>
                          dispatch({
                            type: "UPDATE_COLOR_FILTER",
                            payload: colorNumber,
                          })
                        }
                      />
                      <div
                        className={`color-pallete-design ${colorNumber}`}
                        key={colorNumber}
                      ></div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
          {!show && (
            <h4 className="color-primary cursor" onClick={() => setShow(true)}>
              show less...
            </h4>
          )}
        </div>
      }
    </div>
  );
};
