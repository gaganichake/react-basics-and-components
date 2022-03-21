function ExpenseItem() {
  // You must have only ONE root HTML element in return statement as JSX expressions must have one parent element.
  // For multiple line you should wrape the whole HTML code inside () to signal JavaScript that it's a one statement
  // Use keyboard shortcut shift + option + F to format the source code in this document
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
      <div>March 21th 2022</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$345.90</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
