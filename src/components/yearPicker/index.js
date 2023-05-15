import moment from "moment";

function YearPicker(props) {
  let year = props.year;
  let setYear = props.setYear;
  let selectedMonth = props.selectedMonth;

  return (
    <div
      className={
        year.showPicker
          ? "month-selector-dropdow-show"
          : "month-selector-dropdow-hide"
      }
    >
      <ul className="month-selector-ul">
        <li
          className="month-selector-li"
          onClick={() => {
            setYear({
              selectedYear: moment(
                `${selectedMonth}/01/${parseInt(year.selectedYear) - 1}`
              ).format("YYYY"),
              showPicker: false,
            });
          }}
        >
          {moment(
            `${selectedMonth}/01/${parseInt(year.selectedYear) - 1}`
          ).format("YYYY")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            setYear({
              selectedYear: moment(
                `${selectedMonth}/01/${parseInt(year.selectedYear)}`
              ).format("YYYY"),
              showPicker: false,
            });
          }}
        >
          {moment(`${selectedMonth}/01/${parseInt(year.selectedYear)}`).format(
            "YYYY"
          )}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            setYear({
              selectedYear: moment(
                `${selectedMonth}/01/${parseInt(year.selectedYear) + 1}`
              ).format("YYYY"),
              showPicker: false,
            });
          }}
        >
          {moment(
            `${selectedMonth}/01/${parseInt(year.selectedYear) + 1}`
          ).format("YYYY")}
        </li>
      </ul>
    </div>
  );
}

export default YearPicker;
