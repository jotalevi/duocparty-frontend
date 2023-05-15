import moment from "moment";

function MonthPicker(props) {
  let month = props.month;
  let setMonth = props.setMonth;
  let selectedYear = props.selectedYear;

  return (
    <div
      className={
        month.showPicker
          ? "month-selector-dropdow-show"
          : "month-selector-dropdow-hide"
      }
    >
      <ul className="month-selector-ul">
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`01/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`01/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`02/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`02/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`03/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`03/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`04/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`04/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`05/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`05/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`06/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`06/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`07/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`07/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`08/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`08/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`09/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`09/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`10/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`10/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`11/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`11/01/${selectedYear}`).format("MMM")}
        </li>
        <li
          className="month-selector-li"
          onClick={() => {
            console.log(month);
            setMonth({
              selectedMonth: moment(`12/01/${selectedYear}`).format("MM"),
              showPicker: false,
            });
            console.log(month);
          }}
        >
          {moment(`12/01/${selectedYear}`).format("MMM")}
        </li>
      </ul>
    </div>
  );
}

export default MonthPicker;
