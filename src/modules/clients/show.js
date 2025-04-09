const gridContainer = document.querySelector('main');
// User info
const userName = document.getElementById('user-name');
const clientSince = document.getElementById('client-since');
// History info
const cutsTotal = document.getElementById('cuts-total');
const appointmentsHistory = document.querySelector('ul');
// Fidelity info
const cutsSeals = document.querySelector('.slots');
// Cuts info
const cutsProgress = document.querySelector('.progress');
const cutsBalance = document.getElementById('cuts-balance');
const cutsRemaining = document.getElementById('cuts-remaining');

export function showClient({ client }) {
  if (!client) {
    gridContainer.innerHTML
      = '<p class="card" style="width: 50vw; position: absolute; left: auto; display: block">No clients found</p>';
    return;
  }

  // Set user ifo
  userName.textContent = client.name;
  clientSince.textContent = `Cliente desde ${client.clientSince}`;

  // Set history info
  client.appointmentHistory.forEach((appointment) => {
    const li = document.createElement('li');
    const divCutInfo = document.createElement('div');
    divCutInfo.setAttribute('class', 'cut-info');

    const h3 = document.createElement('h3');
    h3.textContent = appointment.date;

    const p = document.createElement('p');
    p.textContent = appointment.time;

    divCutInfo.append(h3, p);

    const divCutSeal = document.createElement('div');
    divCutSeal.setAttribute('class', 'cut-seal');

    const icon = document.createElement('i');
    icon.setAttribute('class', 'ph ph-seal-check');
    icon.setAttribute('aria-hidden', 'true');

    divCutSeal.append(icon);

    li.append(divCutInfo, divCutSeal);

    appointmentsHistory.append(li)
  });
  cutsTotal.textContent = `${client.loyaltyCard.totalCuts} cortes`;

  // Set fidelity info
  const sealSlots = client.loyaltyCard.cutsNeeded;

  for (let i = 0; i < sealSlots; i++) {
    const span = document.createElement('span');

    if (i === sealSlots - 1) {
      const giftIcon = document.createElement('i');
      giftIcon.setAttribute('class', 'ph-fill ph-gift');

      span.append(giftIcon);
      cutsSeals.append(span);
      break;
    }

    if (client.loyaltyCard.totalCuts > i) {
      const sealImg = document.createElement('img');
      sealImg.setAttribute('src', 'src/assets/pin-check.png');
      sealImg.setAttribute('alt', 'Selo de corte realizado');

      span.append(sealImg);
    }

    cutsSeals.append(span);
  }

  // Set cuts info
  const cutsPercentage = (client.loyaltyCard.totalCuts / client.loyaltyCard.cutsNeeded) * 100;

  cutsProgress.style.width = `${cutsPercentage}%`;
  cutsBalance.textContent = `${client.loyaltyCard.totalCuts} de ${client.loyaltyCard.cutsNeeded}`;
  cutsRemaining.textContent = client.loyaltyCard.cutsRemaining;
}