let vouchers = [];
let voucherCounter = 1;

function addVoucher() {
  const voucher = {
    number: voucherCounter++,
    date: new Date().toLocaleDateString(),
    amount: '',
    description: ''
  };
  vouchers.push(voucher);
  renderVouchers();
}

function renderVouchers() {
  const container = document.getElementById('voucherList');
  container.innerHTML = '';
  vouchers.forEach(v => {
    const div = document.createElement('div');
    div.className = 'voucher';
    div.innerHTML = `
      <h2>Voucher #${v.number}</h2>
      <p>Date: ${v.date}</p>
      <p><strong>Amount:</strong> <input value="${v.amount}" onchange="updateVoucher(${v.number}, 'amount', this.value)" /></p>
      <p><strong>Description:</strong> <input value="${v.description}" onchange="updateVoucher(${v.number}, 'description', this.value)" /></p>
    `;
    container.appendChild(div);
  });
}

function updateVoucher(number, field, value) {
  const v = vouchers.find(v => v.number === number);
  if (v) v[field] = value;
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(vouchers)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'vouchers.json';
  link.click();
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    vouchers = JSON.parse(e.target.result);
    voucherCounter = Math.max(...vouchers.map(v => v.number)) + 1;
    renderVouchers();
  };
  reader.readAsText(file);
}

function printVouchers() {
  const start = parseInt(document.getElementById('printStart').value) || 1;
  const selected = vouchers.filter(v => v.number >= start);
  const printArea = document.getElementById('printArea');
  printArea.innerHTML = '';

  for (let i = 0; i < selected.length; i += 4) {
    const page = document.createElement('div');
    page.className = 'print-page';
    selected.slice(i, i + 4).forEach(v => {
      const div = document.createElement('div');
      div.className = 'voucher';
      div.innerHTML = `
        <h2>Voucher #${v.number}</h2>
        <p>Date: ${v.date}</p>
        <p><strong>Amount:</strong> ${v.amount}</p>
        <p><strong>Description:</strong> ${v.description}</p>
        <div class="signature">
          <div>Paid by: Inam ur Rehman Ansari</div>
          <div>Approved by: Mr. Syed Rahat Ali</div>
        </div>
        <p><em>Company Name: Ansari Solutions</em><br><em>Website: www.ansarisolutions.com</em></p>
      `;
      page.appendChild(div);
    });
    printArea.appendChild(page);
  }

  window.print();
}