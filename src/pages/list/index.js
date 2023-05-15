import moment from "moment";
import TileList from "../../components/tileList";
import React, { useState, useEffect } from "react";
import useMergeState from "../../utils/mergeState";
import MonthPicker from "../../components/monthPicker";
import YearPicker from "../../components/yearPicker";

function ListPage() {
  const [year, setYear] = useMergeState({
    selectedYear: moment().format("YYYY"),
    showPicker: false,
  });

  const [month, setMonth] = useMergeState({
    selectedMonth: moment().format("MM"),
    showPicker: false,
  });

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let carretes = ["", "", "", "", "", "", "", "", ""];
  carretes = [];

  if (carretes.length === 0) {
    return (
      <div className="main-div">
        <h1>
          No encontramos ningun <span className="white-out"> carrete </span>
          en <br />
          <span
            className="white-out"
            onClick={() => {
              if (!month.showPicker)
                setMonth({
                  selectedMonth: month.selectedMonth,
                  showPicker: true,
                });
            }}
          >
            <MonthPicker
              month={month}
              setMonth={(data) => {
                setMonth(data);
              }}
              selectedYear={year.selectedYear}
            />
            {moment(`${month.selectedMonth}/01/${year.selectedYear}`).format(
              "MMM"
            )}
          </span>{" "}
          <span
            className="white-out"
            onClick={() => {
              if (!year.showPicker)
                setYear({
                  selectedYear: year.selectedYear,
                  showPicker: true,
                });
            }}
          >
            <YearPicker
              year={year}
              setYear={(data) => {
                setYear(data);
              }}
              selectedMonth={month.selectedMonth}
            />
            {" " +
              moment(`${month.selectedMonth}/01/${year.selectedYear}`).format(
                "YYYY"
              )}
          </span>
        </h1>
      </div>
    );
  }
  return (
    <div className="main-div-list">
      <div
        className={
          scrollPosition === 0 ? "fixed-title-div-top" : "fixed-title-div"
        }
      >
        <h1 className="fixed-title-h1">
          Mostrando {carretes.length}
          <span className="white-out">
            {" "}
            {carretes.length === 1 ? "carrete" : "carretes"}{" "}
          </span>
          en <br />
          <span
            className="white-out"
            onClick={() => {
              if (!month.showPicker)
                setMonth({
                  selectedMonth: month.selectedMonth,
                  showPicker: true,
                });
            }}
          >
            <MonthPicker
              month={month}
              setMonth={(data) => {
                setMonth(data);
              }}
              selectedYear={year.selectedYear}
            />
            {moment(`${month.selectedMonth}/01/${year.selectedYear}`).format(
              "MMM"
            )}
          </span>{" "}
          <span
            className="white-out"
            onClick={() => {
              if (!year.showPicker)
                setYear({
                  selectedYear: year.selectedYear,
                  showPicker: true,
                });
            }}
          >
            <YearPicker
              year={year}
              setYear={(data) => {
                setYear(data);
              }}
              selectedMonth={month.selectedMonth}
            />
            {" " +
              moment(`${month.selectedMonth}/01/${year.selectedYear}`).format(
                "YYYY"
              )}
          </span>
        </h1>
      </div>
      <TileList carretes={carretes} />
    </div>
  );
}

export default ListPage;
