import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // You must have only ONE root HTML element in return statement as JSX expressions must have one parent element.
  // For multiple line you should wrape the whole HTML code (the JSX) inside braces "()" to signal JavaScript that it's a one statement
  // Use keyboard shortcut shift + option + F to format the source code in this document
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
