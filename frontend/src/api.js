import { differenceInMonths } from "date-fns";

const YIELD_RATE = {
  DEFAULT: 0.0033,
  ADVANCED: 0.008
};

//mocked
function fetchAccount() {
  const account = {
    name: "Marcela",
    currentValue: 2345.7,
    coins: 50,
    monthlyIncome: 5000,
    monthlyExpenses: 2000,
    monthlySaving: 1800,
    bankAccounts: [],
    creditCards: []
  };
  saveAccount(account);
}

function getAccount() {
  if (!localStorage.account) {
    fetchAccount();
  }
  return JSON.parse(localStorage.account);
}

function saveAccount(account) {
  localStorage.setItem("account", JSON.stringify(account));
}

//mocked
function fetchJars() {
  const jars = [
    {
      id: 1,
      currentValue: 167.28,
      name: "Reserva de emergência",
      fraction: 0.05,
      color: "red",
      shared: false,
      unlockable: false,
      status: "ACTIVE",
      yieldType: "DEFAULT",
      history: []
    },
    {
      id: 2,
      currentValue: 167.28,
      name: "Jarro do futuro",
      fraction: 0.05,
      color: "cyan",
      shared: false,
      unlockable: false,
      status: "ACTIVE",
      yieldType: "DEFAULT",
      history: []
    }
  ];
  saveJars(jars);
}

function getJars() {
  if (!localStorage.jars) {
    fetchJars();
  }
  return JSON.parse(localStorage.jars);
}

function getJarById(id) {
  const jars = getJars();
  return jars.find(jar => jar.id === id);
}

function saveJar(newJar) {
  const jars = getJars();
  const jarIndex = jars.findIndex(jar => jar.id === newJar.id);
  const availableFraction = calculateAvailableFraction(jars);
  jars[jarIndex] = adjustValues(newJar, availableFraction);
  saveJars(jars);
}

function adjustValues(newJar, availableFraction) {
  const account = getAccount();
  const fraction =
    newJar.dueDate != null
      ? calculateFraction(
          newJar.targetValue,
          account.monthlySaving,
          newJar.dueDate
        )
      : availableFraction;
  if (fraction > availableFraction) {
    throw Error("Valor mensal necessário excede seu valor disponível mensal");
  }
  return { ...newJar, fraction };
}

function saveJars(jars) {
  localStorage.setItem("jars", JSON.stringify(jars));
}

function createJar(
  name,
  targetValue,
  color = "orange",
  dueDate = null,
  shared = false,
  unlockable = false
) {
  const account = getAccount();
  const jars = getJars();
  const availableFraction = calculateAvailableFraction(jars);
  const fraction =
    dueDate != null
      ? calculateFraction(targetValue, account.monthlySaving, dueDate)
      : availableFraction;
  if (fraction > availableFraction) {
    throw Error("Valor mensal necessário excede seu valor disponível mensal");
  }
  jars.push({
    id: jars.length + 1,
    currentValue: account.currentValue * fraction,
    name,
    targetValue,
    dueDate,
    fraction,
    color,
    shared,
    unlockable,
    status: unlockable ? "LOCKED" : "ACTIVE",
    yieldType: "ADVANCED",
    history: []
  });
  handleJarUpdate(account, jars);
}

function calculateAvailableFraction(jars) {
  return (
    1 -
    jars
      .filter(jar => jar.dueDate && jar.status !== "COMPLETED")
      .map(jar => jar.fraction)
      .reduce((a, b) => a + b, 0)
  );
}

function calculateFraction(targetValue, monthlySaving, dueDate) {
  const monthsToDueDate = differenceInMonths(Date.parse(dueDate), new Date());
  const valuePerMonth = targetValue / monthsToDueDate;
  return valuePerMonth / monthlySaving;
}

function checkAndUpdateCompletedJars(account, jars) {
  for (let jar of jars) {
    const fractionValue = account.currentValue * jar.fraction;
    if (jar.dueDate && fractionValue >= jar.targetValue) {
      jar.currentValue = jar.targetValue;
      jar.status = "COMPLETED";
      account.currentValue = account.currentValue - jar.currentValue;
      saveAccount(account);
    }
  }
}

function adjustNonGoalJarFractions(jars) {
  const availableFraction = calculateAvailableFraction(jars);
  const jarsToAdjust = jars.filter(jar => !jar.dueDate);
  const fraction = availableFraction / jarsToAdjust.length;
  for (let jar of jarsToAdjust) {
    jar.fraction = fraction;
  }
}

function handleJarUpdate(account, jars, referenceDate = null) {
  const activeJars = jars.filter(jar => jar.status !== "COMPLETED");
  const completedJars = jars.filter(jar => jar.status === "COMPLETED");
  checkAndUpdateCompletedJars(account, activeJars);
  adjustNonGoalJarFractions(activeJars);
  updateActiveJarValues(account, activeJars, referenceDate);
  saveJars([...activeJars, ...completedJars]);
}

function updateActiveJarValues(account, jars, referenceDate = null) {
  const activeJars = jars.filter(jar => jar.status !== "COMPLETED");
  for (let jar of activeJars) {
    const fractionValue = account.currentValue * jar.fraction;
    const yieldRate = YIELD_RATE[jar.yieldType];
    const yieldValue = yieldRate * jar.currentValue;
    if (referenceDate) {
      jar.history.push({
        date: referenceDate.toLocaleString(),
        previousValue: jar.currentValue,
        incomeValue: yieldValue,
        description: "Rendimentos"
      });
      jar.history.push({
        date: referenceDate.toLocaleString(),
        previousValue: jar.currentValue + yieldValue,
        incomeValue: fractionValue - jar.currentValue,
        description: "Valor poupado"
      });
    }
    jar.currentValue = fractionValue + yieldValue;
    if (jar.status === "LOCKED" && jar.targetValue * 0.7 < jar.currentValue) {
      jar.status = "UNLOCKED";
    }
  }
}

//mocked
function getTrophies() {
  return [
    {
      name: "Primeiro troféu",
      description: "Obtido por iniciar a jornada de poupar",
      coins: 20
    },
    {
      name: "Indicações Lv.1",
      description: "Obtido por indicar 3 amigos",
      coins: 50
    }
  ];
}

function processMonthlyIncoming(referenceDate) {
  const account = getAccount();
  const jars = getJars();
  const income = account.monthlySaving;
  account.currentValue += income;
  account.coins += Math.ceil(income / 10);
  saveAccount(account);
  handleJarUpdate(account, jars, referenceDate);
}

export default {
  getAccount,
  saveAccount,
  getJars,
  getJarById,
  createJar,
  saveJar,
  getTrophies,
  processMonthlyIncoming
};
