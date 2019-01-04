import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove expense', () => {
  const action = removeExpense({id: 'abc123'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
})

test('should edit expense', () => {
  const action = editExpense('1234abc', {note: 'this is a new student'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234abc',
    updates: {
      note: 'this is a new student'
    }
  })
})

test('should add expense with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 10999,
    createdAt: 1000,
    note: 'This was last months rend'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should set up the action add expense with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
      id: expect.any(String)
    }
  })
})