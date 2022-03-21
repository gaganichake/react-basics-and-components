import './ExpenseItem.css'

function ExpenseItem() {
 const expenseDate = new Date(2022, 2, 21);
 const expenseTitle = "Car Insurance";
 const expenseAmount = 345.90;

  // You must have only ONE root HTML element in return statement as JSX expressions must have one parent element.
  // For multiple line you should wrape the whole HTML code (the JSX) inside braces "()" to signal JavaScript that it's a one statement
  // Use keyboard shortcut shift + option + F to format the source code in this document
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
