const basicAmountInput = document.getElementById('basic-amount');
const seniorAmountInput = document.getElementById('senior-amount');
const totalPrice = document.querySelector('.total-price');
const ticketTypeRadios = document.querySelectorAll('.radio-label-input');
const amountButtons = document.querySelectorAll('.amount__button')

function calculateTotalPrice() {
    const selectedTicketTypeRadio = document.querySelector('.radio-label-input:checked');
    const ticketTypePrice = parseFloat(selectedTicketTypeRadio.value);

    const basicAmount = parseInt(basicAmountInput.value)
    const seniorAmount = parseInt(seniorAmountInput.value)

    const total = ticketTypePrice * basicAmount +
                        ticketTypePrice * 0.7 * seniorAmount; // 30% скидка для senior

    totalPrice.textContent = total.toFixed(2);
}

amountButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculateTotalPrice();
  });
});

ticketTypeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    calculateTotalPrice();
  });
});

calculateTotalPrice()