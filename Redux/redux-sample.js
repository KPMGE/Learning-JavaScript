import Redux from "redux";

console.clear();

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect,
    },
  };
};

// reducers
const claimHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 1000, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }
  if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload];
  }
  if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting,
  claimHistory,
  policies,
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("Kevin", 20));
store.dispatch(createPolicy("Laura", 4));
store.dispatch(createPolicy("Luana", 2));
console.log("3 Policies created: ");
console.log(store.getState());

store.dispatch(createClaim("Kevin", 100));
store.dispatch(createClaim("Luana", 83));
store.dispatch(createClaim("Laura", 300));
console.log("\n\n3 claims made: ");
console.log(store.getState());
