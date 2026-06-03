// Dữ liệu 11 khu phố mới phường Liên Hòa, tỉnh Quảng Ninh
const neighborhoodData = [
  {
    id: "01",
    name: "Khu phố Phong Hải",
    originalWard: "Phong Hải cũ",
    lat: 20.9142,
    lng: 106.8192,
    households: 744,
    percentage: 135,
    area: 2.198,
    culturalHouse: "Khu PH3",
    distToCulturalHouse: 1.5,
    distToWardCenter: 4.0,
    mergerPlan: "Sáp nhập KP Phong Hải 1, 2, 3 cũ",
    officials: [
      { name: "Nguyễn Văn Hùng", role: "Bí thư Chi bộ", phone: "0912.345.671", email: "nvhung.ph@lienhoa.quangninh.gov.vn" },
      { name: "Lê Thị Tuyết", role: "Trưởng khu phố", phone: "0989.123.451", email: "lttuyet.ph@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Văn Minh", role: "Phó Bí thư Chi bộ", phone: "0976.234.561", email: "pvminh.ph@lienhoa.quangninh.gov.vn" },
      { name: "Hoàng Văn Cường", role: "Phó Trưởng khu phố", phone: "0904.345.671", email: "hvcuong.ph@lienhoa.quangninh.gov.vn" },
      { name: "Trần Thị Mai", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.901", email: "ttmai.ph@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Thị Lan", role: "Chi hội trưởng Phụ nữ", phone: "0936.789.012", email: "ntlan.ph@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "02",
    name: "Khu phố Trung Hải",
    originalWard: "Phong Hải cũ",
    lat: 20.9078,
    lng: 106.8270,
    households: 702,
    percentage: 128,
    area: 1.920,
    culturalHouse: "Khu PH5",
    distToCulturalHouse: 1.0,
    distToWardCenter: 3.0,
    mergerPlan: "Sáp nhập KP Phong Hải 4, 5, 6 cũ",
    officials: [
      { name: "Trần Văn Nam", role: "Bí thư Chi bộ", phone: "0912.345.672", email: "tvnam.th@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Thị Bích", role: "Trưởng khu phố", phone: "0989.123.452", email: "ntbich.th@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Thanh Sơn", role: "Phó Bí thư Chi bộ", phone: "0976.234.562", email: "ptson.th@lienhoa.quangninh.gov.vn" },
      { name: "Bùi Văn Hải", role: "Phó Trưởng khu phố", phone: "0904.345.672", email: "bvhai.th@lienhoa.quangninh.gov.vn" },
      { name: "Đỗ Thị Thu", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.902", email: "dtthu.th@lienhoa.quangninh.gov.vn" },
      { name: "Vũ Văn Tuấn", role: "Công an viên khu phố", phone: "0936.789.013", email: "vvtuan.th@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "03",
    name: "Khu phố Đông Hải",
    originalWard: "Phong Hải cũ",
    lat: 20.9008,
    lng: 106.8355,
    households: 749,
    percentage: 136,
    area: 1.870,
    culturalHouse: "Khu PH8",
    distToCulturalHouse: 2.0,
    distToWardCenter: 3.0,
    mergerPlan: "Sáp nhập KP Phong Hải 7, 8 cũ",
    officials: [
      { name: "Phạm Văn Long", role: "Bí thư Chi bộ", phone: "0912.345.673", email: "pvlong.dh@lienhoa.quangninh.gov.vn" },
      { name: "Đặng Đình Tiến", role: "Trưởng khu phố", phone: "0989.123.453", email: "ddtien.dh@lienhoa.quangninh.gov.vn" },
      { name: "Ngô Thị Dung", role: "Phó Bí thư Chi bộ", phone: "0976.234.563", email: "ntdung.dh@lienhoa.quangninh.gov.vn" },
      { name: "Trịnh Văn Thành", role: "Phó Trưởng khu phố", phone: "0904.345.673", email: "tvthanh.dh@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Văn Dũng", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.903", email: "nvdung.dh@lienhoa.quangninh.gov.vn" },
      { name: "Lê Minh Khoa", role: "Bí thư Chi đoàn", phone: "0936.789.014", email: "lmkhoa.dh@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "04",
    name: "Khu phố Trung Bản",
    originalWard: "Liên Hòa cũ",
    lat: 20.8738,
    lng: 106.8428,
    households: 625,
    percentage: 114,
    area: 3.256,
    culturalHouse: "Khu LH2",
    distToCulturalHouse: 1.5,
    distToWardCenter: 2.0,
    mergerPlan: "Sáp nhập KP Liên Hòa 1, 2, 3 cũ",
    officials: [
      { name: "Đỗ Văn Bình", role: "Bí thư Chi bộ", phone: "0912.345.674", email: "dvbinh.tb@lienhoa.quangninh.gov.vn" },
      { name: "Hoàng Thị Yến", role: "Trưởng khu phố", phone: "0989.123.454", email: "htyen.tb@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Văn Khải", role: "Phó Bí thư Chi bộ", phone: "0976.234.564", email: "nvkhai.tb@lienhoa.quangninh.gov.vn" },
      { name: "Trần Công Danh", role: "Phó Trưởng khu phố", phone: "0904.345.674", email: "tcdanh.tb@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Thị Ngọc", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.904", email: "ptngoc.tb@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Tuấn Anh", role: "Công an viên khu phố", phone: "0936.789.015", email: "ntanh.tb@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "05",
    name: "Khu phố Quỳnh Biểu",
    originalWard: "Liên Hòa cũ",
    lat: 20.8668,
    lng: 106.8508,
    households: 559,
    percentage: 102,
    area: 2.410,
    culturalHouse: "Khu LH4",
    distToCulturalHouse: 1.5,
    distToWardCenter: 2.0,
    mergerPlan: "Sáp nhập KP Liên Hòa 4, 5 cũ",
    officials: [
      { name: "Vũ Đức Thịnh", role: "Bí thư Chi bộ", phone: "0912.345.675", email: "vdthinh.qb@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Văn Quảng", role: "Trưởng khu phố", phone: "0989.123.455", email: "nvquang.qb@lienhoa.quangninh.gov.vn" },
      { name: "Đỗ Thị Hằng", role: "Phó Bí thư Chi bộ", phone: "0976.234.565", email: "dthang.qb@lienhoa.quangninh.gov.vn" },
      { name: "Bùi Quốc Việt", role: "Phó Trưởng khu phố", phone: "0904.345.675", email: "bqviet.qb@lienhoa.quangninh.gov.vn" },
      { name: "Trần Văn Đạt", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.905", email: "tvdat.qb@lienhoa.quangninh.gov.vn" },
      { name: "Lê Thị Hương", role: "Chi hội trưởng Phụ nữ", phone: "0936.789.016", email: "lthuong.qb@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "06",
    name: "Khu phố Lưu Khê",
    originalWard: "Liên Hòa cũ",
    lat: 20.8585,
    lng: 106.8582,
    households: 952,
    percentage: 173,
    area: 2.820,
    culturalHouse: "Khu LH8",
    distToCulturalHouse: 2.0,
    distToWardCenter: 2.0,
    mergerPlan: "Sáp nhập KP Liên Hòa 6, 7, 8 cũ",
    officials: [
      { name: "Lương Văn Quyết", role: "Bí thư Chi bộ", phone: "0912.345.676", email: "lvquyet.lk@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Thế Hùng", role: "Trưởng khu phố", phone: "0989.123.456", email: "pthung.lk@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Thị Thuận", role: "Phó Bí thư Chi bộ", phone: "0976.234.566", email: "ntthuan.lk@lienhoa.quangninh.gov.vn" },
      { name: "Hoàng Văn Hải", role: "Phó Trưởng khu phố", phone: "0904.345.676", email: "hvhai.lk@lienhoa.quangninh.gov.vn" },
      { name: "Trịnh Quốc Tuấn", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.906", email: "tqtuan.lk@lienhoa.quangninh.gov.vn" },
      { name: "Đào Văn Nghĩa", role: "Công an viên khu phố", phone: "0936.789.017", email: "dvnghia.lk@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "07",
    name: "Khu phố Tiền Phong",
    originalWard: "Tiền Phong cũ",
    lat: 20.8500,
    lng: 106.8406,
    households: 551,
    percentage: 100,
    area: 17.280,
    culturalHouse: "Khu TP3",
    distToCulturalHouse: 3.0,
    distToWardCenter: 7.0,
    mergerPlan: "Sáp nhập KP Tiền Phong 1, 2, 3, 4 cũ",
    officials: [
      { name: "Nguyễn Văn Lực", role: "Bí thư Chi bộ", phone: "0912.345.677", email: "nvluc.tp@lienhoa.quangninh.gov.vn" },
      { name: "Trương Văn Đông", role: "Trưởng khu phố", phone: "0989.123.457", email: "tvdong.tp@lienhoa.quangninh.gov.vn" },
      { name: "Đặng Văn Nam", role: "Phó Bí thư Chi bộ", phone: "0976.234.567", email: "dvnam.tp@lienhoa.quangninh.gov.vn" },
      { name: "Vũ Văn Hoạt", role: "Phó Trưởng khu phố", phone: "0904.345.677", email: "vvhoat.tp@lienhoa.quangninh.gov.vn" },
      { name: "Hoàng Văn Thái", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.907", email: "hvthai.tp@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Thị Thảo", role: "Chi hội trưởng Phụ nữ", phone: "0936.789.018", email: "ntthao.tp@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "08",
    name: "Khu phố Liên Vị",
    originalWard: "Liên Vị cũ",
    lat: 20.8662,
    lng: 106.8123,
    households: 739,
    percentage: 134,
    area: 1.726,
    culturalHouse: "Khu Nam 2",
    distToCulturalHouse: 1.0,
    distToWardCenter: 3.5,
    mergerPlan: "Sáp nhập KP Nam 1, Nam 2, Đông 2 cũ",
    officials: [
      { name: "Nguyễn Văn Sơn", role: "Bí thư Chi bộ", phone: "0912.345.678", email: "nvson.lv@lienhoa.quangninh.gov.vn" },
      { name: "Bùi Văn Lâm", role: "Trưởng khu phố", phone: "0989.123.458", email: "bvlam.lv@lienhoa.quangninh.gov.vn" },
      { name: "Lê Văn Hùng", role: "Phó Bí thư Chi bộ", phone: "0976.234.568", email: "lvhung.lv@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Văn Hải", role: "Phó Trưởng khu phố", phone: "0904.345.678", email: "pvhai.lv@lienhoa.quangninh.gov.vn" },
      { name: "Trần Thị Hoa", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.908", email: "tthoa.lv@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Văn Phóng", role: "Công an viên khu phố", phone: "0936.789.019", email: "nvphong.lv@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "09",
    name: "Khu phố Vị Dương",
    originalWard: "Liên Vị cũ",
    lat: 20.8626,
    lng: 106.8001,
    households: 591,
    percentage: 107,
    area: 3.761,
    culturalHouse: "Khu Đông 1",
    distToCulturalHouse: 1.5,
    distToWardCenter: 4.0,
    mergerPlan: "Sáp nhập KP Đình 1, Đình 2, Đông 1 cũ",
    officials: [
      { name: "Đỗ Văn Minh", role: "Bí thư Chi bộ", phone: "0912.345.679", email: "dvminh.vd@lienhoa.quangninh.gov.vn" },
      { name: "Hoàng Văn Lợi", role: "Trưởng khu phố", phone: "0989.123.459", email: "hvloi.vd@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Thị Liên", role: "Phó Bí thư Chi bộ", phone: "0976.234.569", email: "ntlien.vd@lienhoa.quangninh.gov.vn" },
      { name: "Trần Công Phượng", role: "Phó Trưởng khu phố", phone: "0904.345.679", email: "tcphuong.vd@lienhoa.quangninh.gov.vn" },
      { name: "Vũ Đình Tuân", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.909", email: "vdtuan.vd@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Minh Quang", role: "Bí thư Chi đoàn", phone: "0936.789.020", email: "pmquang.vd@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "10",
    name: "Khu phố Quán",
    originalWard: "Liên Vị cũ",
    lat: 20.8548,
    lng: 106.8078,
    households: 641,
    percentage: 117,
    area: 1.565,
    culturalHouse: "Khu Bầu",
    distToCulturalHouse: 1.0,
    distToWardCenter: 4.5,
    mergerPlan: "Sáp nhập KP Quán, Bầu, Hàn cũ",
    officials: [
      { name: "Nguyễn Văn Thắng", role: "Bí thư Chi bộ", phone: "0912.345.680", email: "nvthang.q@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Văn Tiến", role: "Trưởng khu phố", phone: "0989.123.460", email: "pvtien.q@lienhoa.quangninh.gov.vn" },
      { name: "Lê Đình Cương", role: "Phó Bí thư Chi bộ", phone: "0976.234.570", email: "ldcuong.q@lienhoa.quangninh.gov.vn" },
      { name: "Bùi Thị Thủy", role: "Phó Trưởng khu phố", phone: "0904.345.680", email: "btthuy.q@lienhoa.quangninh.gov.vn" },
      { name: "Hoàng Đức Toàn", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.910", email: "hdtoan.q@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Công Lý", role: "Công an viên khu phố", phone: "0936.789.021", email: "ncly.q@lienhoa.quangninh.gov.vn" }
    ]
  },
  {
    id: "11",
    name: "Khu phố Vị Khê",
    originalWard: "Liên Vị cũ",
    lat: 20.8475,
    lng: 106.7950,
    households: 650,
    percentage: 118,
    area: 22.624,
    culturalHouse: "Khu Vị Khê",
    distToCulturalHouse: 2.0,
    distToWardCenter: 5.5,
    mergerPlan: "Sáp nhập khu Bấc và khu Vị Khê cũ",
    officials: [
      { name: "Trịnh Văn Quân", role: "Bí thư Chi bộ", phone: "0912.345.681", email: "tvquan.vk@lienhoa.quangninh.gov.vn" },
      { name: "Lương Đình Hùng", role: "Trưởng khu phố", phone: "0989.123.461", email: "ldhung.vk@lienhoa.quangninh.gov.vn" },
      { name: "Đỗ Thị Mơ", role: "Phó Bí thư Chi bộ", phone: "0976.234.571", email: "dtmo.vk@lienhoa.quangninh.gov.vn" },
      { name: "Phạm Văn Bằng", role: "Phó Trưởng khu phố", phone: "0904.345.681", email: "pvbang.vk@lienhoa.quangninh.gov.vn" },
      { name: "Vũ Văn Khải", role: "Trưởng Ban công tác Mặt trận", phone: "0915.678.911", email: "vvkhai.vk@lienhoa.quangninh.gov.vn" },
      { name: "Nguyễn Hoàng Hải", role: "Công an viên khu phố", phone: "0936.789.022", email: "nhhai.vk@lienhoa.quangninh.gov.vn" }
    ]
  }
];

// Hàm xóa dấu tiếng Việt phục vụ tìm kiếm fuzzy
function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|B̉|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Một số hệ thống gõ khác
  str = str.replace(/\u0300|\u0301|\u0309|\u0323|\u0303/g, ""); // Huyền sắc hỏi nặng ngã
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ă, Ơ, Ư
  return str.trim();
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const suggestionsBox = document.getElementById("suggestions-box");
  const totalWardsEl = document.getElementById("total-wards");
  const totalHouseholdsEl = document.getElementById("total-households");
  const totalAreaEl = document.getElementById("total-area");
  
  const dashboardView = document.getElementById("dashboard-view");
  const detailView = document.getElementById("detail-view");
  const neighborhoodGrid = document.getElementById("neighborhood-grid");
  const backToDashboardBtn = document.getElementById("back-to-dashboard");

  // Render thông tin chi tiết khu phố
  const kpName = document.getElementById("kp-name");
  const kpOriginalWard = document.getElementById("kp-original-ward");
  const kpPlan = document.getElementById("kp-plan");
  const kpArea = document.getElementById("kp-area");
  const kpHouseholds = document.getElementById("kp-households");
  const kpPercentage = document.getElementById("kp-percentage");
  const kpPercentageBar = document.getElementById("kp-percentage-bar");
  const kpCulturalHouse = document.getElementById("kp-cultural-house");
  const kpDistToCultural = document.getElementById("kp-dist-to-cultural");
  const kpDistToWard = document.getElementById("kp-dist-to-ward");
  const kpLat = document.getElementById("kp-lat");
  const kpLng = document.getElementById("kp-lng");
  const gmapIframe = document.getElementById("gmap-iframe");
  const officialsGrid = document.getElementById("officials-grid");

  // Tính toán số liệu tổng quan
  const totalHouseholds = neighborhoodData.reduce((sum, item) => sum + item.households, 0);
  const totalArea = neighborhoodData.reduce((sum, item) => sum + item.area, 0).toFixed(3);

  totalWardsEl.textContent = neighborhoodData.length;
  totalHouseholdsEl.textContent = totalHouseholds.toLocaleString("vi-VN") + " hộ";
  totalAreaEl.textContent = totalArea + " km²";

  // Hiển thị danh sách các khu phố dưới dạng grid thẻ trong dashboard
  function renderNeighborhoodCards() {
    neighborhoodGrid.innerHTML = "";
    neighborhoodData.forEach(item => {
      const card = document.createElement("div");
      card.className = "card-kp";
      card.innerHTML = `
        <div class="card-kp-header">
          <span class="card-id">${item.id}</span>
          <h3>${item.name}</h3>
        </div>
        <div class="card-kp-body">
          <p><i class="fas fa-map-marker-alt text-primary-accent"></i> <strong>Xã/phường gốc:</strong> ${item.originalWard}</p>
          <p><i class="fas fa-users text-primary-accent"></i> <strong>Số hộ:</strong> ${item.households} hộ (${item.percentage}%)</p>
          <p><i class="fas fa-chart-area text-primary-accent"></i> <strong>Diện tích:</strong> ${item.area} km²</p>
        </div>
        <div class="card-kp-footer">
          <span>Xem chi tiết <i class="fas fa-arrow-right"></i></span>
        </div>
      `;
      card.addEventListener("click", () => {
        showDetail(item);
      });
      neighborhoodGrid.appendChild(card);
    });
  }

  // Chức năng chuyển đổi sang trang chi tiết
  function showDetail(item) {
    kpName.textContent = item.name;
    kpOriginalWard.textContent = item.originalWard;
    kpPlan.textContent = item.mergerPlan;
    kpArea.textContent = item.area.toFixed(3) + " km²";
    kpHouseholds.textContent = item.households.toLocaleString("vi-VN") + " hộ";
    kpPercentage.textContent = item.percentage + "%";
    
    // Giới hạn max width của thanh phần trăm là 100% trong CSS
    kpPercentageBar.style.width = Math.min(item.percentage, 100) + "%";
    
    kpCulturalHouse.textContent = item.culturalHouse;
    kpDistToCultural.textContent = item.distToCulturalHouse.toFixed(1) + " km";
    kpDistToWard.textContent = item.distToWardCenter.toFixed(1) + " km";
    kpLat.textContent = item.lat.toFixed(4);
    kpLng.textContent = item.lng.toFixed(4);

    // Cập nhật Google Map Embed Iframe
    gmapIframe.src = `https://maps.google.com/maps?q=${item.lat},${item.lng}&z=15&t=&ie=UTF8&iwloc=&output=embed`;

    // Render danh sách 6 cán bộ
    officialsGrid.innerHTML = "";
    item.officials.forEach((official, idx) => {
      // Icon đại diện ngẫu nhiên dựa trên giới tính/chức vụ
      const isFemale = official.name.includes("Thị") || official.name.includes("Yến") || official.name.includes("Tuyết") || official.name.includes("Hương") || official.name.includes("Hoa") || official.name.includes("Mơ") || official.name.includes("Liên");
      const avatarUrl = isFemale 
        ? "https://raw.githubusercontent.com/hexschool/tw-join/main/public/images/female.png"
        : "https://raw.githubusercontent.com/hexschool/tw-join/main/public/images/male.png";

      // Tạo fallback avatar bằng ký tự đầu
      const initials = official.name.split(" ").slice(-1)[0][0];

      const officialCard = document.createElement("div");
      officialCard.className = "official-card";
      officialCard.innerHTML = `
        <div class="official-avatar-container">
          <div class="official-avatar">${initials}</div>
          <span class="official-idx">#${idx + 1}</span>
        </div>
        <div class="official-info">
          <h4>${official.name}</h4>
          <p class="official-role">${official.role}</p>
          <div class="official-contact">
            <a href="tel:${official.phone}"><i class="fas fa-phone-alt"></i> ${official.phone}</a>
            <a href="mailto:${official.email}"><i class="far fa-envelope"></i> ${official.email}</a>
          </div>
        </div>
      `;
      officialsGrid.appendChild(officialCard);
    });

    // Ẩn dashboard, hiển thị chi tiết
    dashboardView.classList.add("hidden");
    detailView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    suggestionsBox.classList.add("hidden");
  }

  // Chức năng quay lại dashboard
  backToDashboardBtn.addEventListener("click", () => {
    detailView.classList.add("hidden");
    dashboardView.classList.remove("hidden");
    searchInput.value = "";
    suggestionsBox.classList.add("hidden");
  });

  // Xử lý tìm kiếm và tự động gợi ý
  function handleSearchInput() {
    const query = removeVietnameseTones(searchInput.value.toLowerCase().trim());
    if (query === "") {
      suggestionsBox.classList.add("hidden");
      return;
    }

    const filtered = neighborhoodData.filter(item => {
      const nameMatch = removeVietnameseTones(item.name.toLowerCase()).includes(query);
      const originalWardMatch = removeVietnameseTones(item.originalWard.toLowerCase()).includes(query);
      const idMatch = item.id.includes(query);
      const planMatch = removeVietnameseTones(item.mergerPlan.toLowerCase()).includes(query);
      return nameMatch || originalWardMatch || idMatch || planMatch;
    });

    if (filtered.length > 0) {
      suggestionsBox.innerHTML = "";
      filtered.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "suggestion-item";
        itemEl.innerHTML = `
          <div>
            <strong>${item.name}</strong> 
            <small class="text-muted">(${item.originalWard})</small>
          </div>
          <span class="badge-accent">${item.id}</span>
        `;
        itemEl.addEventListener("click", () => {
          searchInput.value = item.name;
          suggestionsBox.classList.add("hidden");
          showDetail(item);
        });
        suggestionsBox.appendChild(itemEl);
      });
      suggestionsBox.classList.remove("hidden");
    } else {
      suggestionsBox.innerHTML = `<div class="no-suggestions">Không tìm thấy khu phố nào khớp</div>`;
      suggestionsBox.classList.remove("hidden");
    }
  }

  searchInput.addEventListener("input", handleSearchInput);

  // Nhấp chuột bên ngoài thanh tìm kiếm để ẩn gợi ý
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.add("hidden");
    }
  });

  // Nhấn Enter hoặc nút Search
  searchBtn.addEventListener("click", () => {
    const query = removeVietnameseTones(searchInput.value.toLowerCase().trim());
    if (query === "") return;

    // Tìm kiếm khớp chính xác nhất hoặc khớp đầu tiên
    const matched = neighborhoodData.find(item => {
      return removeVietnameseTones(item.name.toLowerCase()).includes(query) ||
             removeVietnameseTones(item.originalWard.toLowerCase()).includes(query);
    });

    if (matched) {
      showDetail(matched);
    } else {
      alert("Không tìm thấy khu phố phù hợp với từ khóa tìm kiếm!");
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });

  // Khởi tạo hiển thị ban đầu
  renderNeighborhoodCards();
});
