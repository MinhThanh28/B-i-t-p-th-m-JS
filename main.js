/**
 * Đầu vào:
 * Tên phim (movieName)
 * Giá vé người lớn (adultTicketPrice)
 * Giá vé trẻ em (childTicketPrice)
 * Số vé người lớn đã bán (soldAdultTickets)
 * Số vé trẻ em đã bán (soldChildTickets)
 * Tỷ lệ phần trăm của tổng số tiền quyên góp cho tổ chức từ thiện (donationPercentage)
 * Xử lý:
 * Tiền thu được từ việc bán vé : totalRevenue = (adultTicketPrice * soldAdultTickets) + (childTicketPrice * soldChildTickets)
 * Số tiền quyên góp cho tổ chức từ thiện: donationAmount = totalRevenue * (donationPercentage / 100)
 * đầu ra:
 * show donationAmount
 */
const calculateDonation = document.getElementById("calculateDonation");
calculateDonation.onclick = function () {
  const movieName = document.getElementById("movieName").value;
  const adultTicketPrice =
    document.getElementById("adultTicketPrice").value * 1;
  const childTicketPrice =
    document.getElementById("childTicketPrice").value * 1;
  const soldAdultTickets =
    document.getElementById("soldAdultTickets").value * 1;
  const soldChildTickets =
    document.getElementById("soldChildTickets").value * 1;
  const donationPercentage =
    document.getElementById("donationPercentage").value * 1;

  const totalRevenue =
    adultTicketPrice * soldAdultTickets + childTicketPrice * soldChildTickets;
  const donationAmount = totalRevenue * (donationPercentage / 100);
  var content = "";
  content +=
    "<p> Tên phim: " +
    movieName +
    "<br /> số vé đã bán: " +
    (soldAdultTickets + soldChildTickets) +
    "<br /> doanh thu: " +
    totalRevenue +
    "<br /> trích %: " +
    donationPercentage +
    " % " +
    "<br /> Số tiền trích từ thiện: " +
    donationAmount;
  const result = document.getElementById("result");
  result.innerHTML = content;
};
