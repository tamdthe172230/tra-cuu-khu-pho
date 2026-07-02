// Dữ liệu 11 khu phố mới phường Liên Hòa, tỉnh Quảng Ninh
const neighborhoodData = [
  {
    id: "01",
    name: "Khu phố Phong Hải",
    originalWard: "Phong Hải 1, 2, 3",
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
      { name: "Bùi Thị Hoàn", role: "Bí thư Chi bộ", phone: "0367259233", email: "" },
      { name: "Phạm Thị Bình", role: "Trưởng khu", phone: "0358005830", email: "" },
      { name: "Bùi Huy Viên", role: "Trưởng ban CTMT", phone: "0976755802", email: "" },
    ]
  },
  {
    id: "02",
    name: "Khu phố Trung Hải",
    originalWard: "Phong Hải 4, 5, 6",
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
      { name: "Ngô Bá Bí", role: "Bí thư Chi bộ", phone: "0336237695", email: "" },
      { name: "Vũ Tài Thụy", role: "Trưởng khu", phone: "0388138099", email: "" },
      { name: "Bùi Thế Trung", role: "Trưởng ban CTMT", phone: "0986188638", email: "" },
    ]
  },
  {
    id: "03",
    name: "Khu phố Đông Hải",
    originalWard: "Phong Hải 7, 8",
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
      { name: "Lê Văn Hào", role: "Bí thư Chi bộ", phone: "0963884262", email: "" },
      { name: "Vũ Trọng Thiệp", role: "Trưởng khu", phone: "0987647293", email: "" },
      { name: "Nguyễn Văn Hợi", role: "Trưởng ban CTMT", phone: "0394783498", email: "" },
    ]
  },
  {
    id: "04",
    name: "Khu phố Trung Bản",
    originalWard: "Liên Hòa 1, 2, 3",
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
      { name: "Nguyễn Hoàng Sơn", role: "Bí thư Chi bộ", phone: "0356480893", email: "" },
      { name: "Nguyễn Thị Hồng Hiếu", role: "Trưởng khu", phone: "0332592569", email: "" },
      { name: "Trần Thị Tuyết Anh", role: "Trưởng ban CTMT", phone: "0975628037", email: "" },
    ]
  },
  {
    id: "05",
    name: "Khu phố Quỳnh Biểu",
    originalWard: "Liên Hòa 4, 5",
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
      { name: "Nguyễn Văn Thảo", role: "Bí thư Chi bộ", phone: "0356361408", email: "" },
      { name: "Trần Văn Thương", role: "Trưởng khu", phone: "0386713140", email: "" },
      { name: "Vũ Quốc Kỳ", role: "Trưởng ban CTMT", phone: "0399376367", email: "" },
    ]
  },
  {
    id: "06",
    name: "Khu phố Lưu Khê",
    originalWard: "Liên Hòa 6,  7, 8",
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
      { name: "Đỗ Văn Nhất", role: "Bí thư Chi bộ", phone: "098297033", email: "" },
      { name: "Phạm Thị Giang", role: "Trưởng khu", phone: "0975466939", email: "" },
      { name: "Nguyễn Thị Chiên", role: "Trưởng ban CTMT", phone: "0382598918", email: "" },
    ]
  },
  {
    id: "07",
    name: "Khu phố Tiền Phong",
    originalWard: "Tiền Phong 1, 2, 3, 4",
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
      { name: "Đỗ Thị Đún", role: "Bí thư Chi bộ", phone: "0340200839", email: "" },
      { name: "Lê Thị Bích Huệ", role: "Trưởng khu", phone: "0982381936", email: "" },
      { name: "Phạm Văn Tĩnh", role: "Trưởng ban CTMT", phone: "0383267999", email: "" },
    ]
  },
  {
    id: "08",
    name: "Khu phố Liên Vị",
    originalWard: "Nam 1, 2, Đông 2",
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
      { name: "Hoàng Thị Mai", role: "Bí thư Chi bộ", phone: "0367615346", email: "" },
      { name: "Đỗ Thị Lệ", role: "Trưởng khu", phone: "0373241891", email: "" },
      { name: "Cao Thị Châm", role: "Trưởng ban CTMT", phone: "0363528862", email: "" },
    ]
  },
  {
    id: "09",
    name: "Khu phố Vị Dương",
    originalWard: "Đình 1, 2, Đông 1",
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
      { name: "Đỗ Văn Nhân", role: "Bí thư Chi bộ", phone: "0966925479", email: "" },
      { name: "Đỗ Thị Ngoan", role: "Trưởng khu", phone: "0367143661", email: "" },
      { name: "Hoàng Thị Hoài", role: "Trưởng ban CTMT", phone: "0384691735", email: "" },
    ]
  },
  {
    id: "10",
    name: "Khu phố Quán",
    originalWard: "Quán, Bầu, Hàn",
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
      { name: "Nguyễn Văn Phi", role: "Bí thư Chi bộ", phone: "0349063983", email: "" },
      { name: "Nguyễn Thị Lệ Minh", role: "Trưởng khu", phone: "0359421978", email: "" },
      { name: "Lê Xuân Vịnh", role: "Trưởng ban CTMT", phone: "0347090213", email: "" },
    ]
  },
  {
    id: "11",
    name: "Khu phố Vị Khê",
    originalWard: "Bấc, Vị Khê",
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
      { name: "Đỗ Văn Kiên", role: "Bí thư Chi bộ", phone: "0386574216", email: "" },
      { name: "Lê Ngọc Phượng", role: "Trưởng khu", phone: "0348691933", email: "" },
      { name: "Đặng Thị Quyên", role: "Trưởng ban CTMT", phone: "0327878038", email: "" },
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
