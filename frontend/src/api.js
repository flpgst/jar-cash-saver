import { differenceInMonths } from "date-fns";

//mocked
function fetchAccount() {
  const account = {
    name: "Marcela",
    currentValue: 3345.7,
    coins: 50,
    monthlyIncome: 5000,
    monthlyExpenses: 2000,
    monthlySaving: 1800
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
      unlockable: false
    },
    {
      id: 2,
      currentValue: 167.28,
      name: "Jarro do futuro",
      fraction: 0.05,
      color: "cyan",
      shared: false,
      unlockable: false
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
    id: jars.length == 0 ? 1 : jars[jars.length].id + 1,
    currentValue: account.currentValue * fraction,
    name,
    targetValue,
    dueDate,
    fraction,
    color,
    shared,
    unlockable
  });
  adjustNonGoalJarFractions(jars);
  updateJarValues(account, jars);
}

function calculateAvailableFraction(jars) {
  return (
    1 -
    jars
      .filter(jar => jar.dueDate)
      .map(jar => jar.fraction)
      .reduce((a, b) => a + b, 0)
  );
}

function calculateFraction(targetValue, monthlySaving, dueDate) {
  const monthsToDueDate = differenceInMonths(new Date(), dueDate);
  const valuePerMonth = targetValue / monthsToDueDate;
  return valuePerMonth / monthlySaving;
}

function adjustNonGoalJarFractions(jars) {
  const availableFraction = calculateAvailableFraction(jars);
  const jarsToAdjust = jars.filter(jar => !jar.dueDate);
  const fraction = availableFraction / jarsToAdjust.length;
  for (let jar in jarsToAdjust) {
    jar.fraction = fraction;
  }
}

function updateJarValues(account, jars) {
  for (let jar in jars) {
    jar.currentValue = account.currentValue * jar.fraction;
  }
  saveJars(jars);
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

function processMonthlyIncoming(value) {
  const account = getAccount();
  const jars = getJars();
  account.currentValue = account.currentValue + value;
  saveAccount(account);
  updateJarValues(account, jars);
}

export default {
  getAccount,
  getJars,
  getJarById,
  createJar,
  getTrophies,
  processMonthlyIncoming
};
