// ================= CONFIGURACIÓN GLOBAL CHART.JS =================
if (typeof Chart !== "undefined") {
  Chart.defaults.font.family =
    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  Chart.defaults.font.size = 11;
  Chart.defaults.animation = false;
  Chart.defaults.responsiveAnimationDuration = 0;
}

// ================= TABS =================
function setupTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add("active");
    });
  });
}

// ================= DATA =================
const dataPND = {
  general: {
    avance: 59.18,
    sectores: [
      { nombre: "Educativo y Cultural", avance: 59.0 },
      { nombre: "Económico", avance: 45.0 },
      { nombre: "Mujeres", avance: 60.0 },
      { nombre: "Social", avance: 55.0 },
      { nombre: "Ecológico", avance: 60.0 },
      { nombre: "Afrocolombiano", avance: 38.34 },
      { nombre: "Comunitario", avance: 39.54 },
      { nombre: "Entes territoriales", avance: 42.0 },
    ],
  },

  educativo: {
    indicadores: [
      { titulo: "Tasa de cobertura en educación superior", valor: 89.32 },
      {
        titulo: "Tránsito inmediato a educación superior (zonas rurales)",
        valor: 104.31,
      },
      { titulo: "Estudiantes nuevos en Educación Superior", valor: 38.1 },
      {
        titulo:
          "Niñas y niños con educación inicial en el marco de la atención integral",
        valor: 74.89,
      },
      {
        titulo:
          "Ambientes educativos construidos/mejorados en educación preescolar, básica y media",
        valor: 44.72,
      },
      { titulo: "Participación de la inversión en I+D frente al PIB", valor: 62.0 },
      {
        titulo: "Cobertura del programa de alimentación escolar (PAE)",
        valor: 84.48,
      },
      {
        titulo: "Espacios culturales construidos, dotados y fortalecidos",
        valor: 55.5,
      },
      {
        titulo:
          "Instituciones educativas/culturales con proyectos institucionales",
        valor: 594.6,
      },
      { titulo: "Establecimientos que incorporan educación CRESE", valor: 82.22 },
      {
        titulo:
          "Personas que acceden a procesos de fortalecimiento de prácticas culturales y artísticas",
        valor: 183.44,
      },
      {
        titulo:
          "Estudiantes de transición a sexto en programas de desarrollo integral",
        valor: 44.15,
      },
      { titulo: "Tasa de deserción interanual del sector oficial", valor: 41.34 },
      { titulo: "Tasa de cobertura neta en educación media", valor: 77.72 },
      {
        titulo:
          "Proyectos artísticos y culturales apoyados por Concertación Cultural",
        valor: 96.0,
      },
      { titulo: "Población campesina que no sabe leer y escribir", valor: 0.0 },
      {
        titulo: "Establecimientos rurales en categoría D en Saber 11",
        valor: 0.0,
      },
    ],
  },

  economico: {
    indicadores: [
      { titulo: "Hectáreas entregadas a través del fondo de tierras", valor: 0.77 },
      {
        titulo:
          "Formalización de predios de pequeña y mediana propiedad rural",
        valor: 26.0,
      },
      {
        titulo: "Exportaciones agrícolas no tradicionales (USD)",
        valor: 70.31,
      },
      {
        titulo: "Crédito agropecuario para mujeres rurales en Finagro",
        valor: 70.0,
      },
      {
        titulo: "Crédito de fomento para pequeños productores",
        valor: 49.0,
      },
      {
        titulo: "Centros de reindustrialización ZASCA en funcionamiento",
        valor: 234.38,
      },
      {
        titulo:
          "Participación de exportaciones no minero energéticas y servicios",
        valor: 0.0,
      },
      { titulo: "Instalaciones fluviales intervenidas", valor: 53.33 },
      { titulo: "Costo logístico sobre las ventas", valor: 17.9 },
      { titulo: "Vías terciarias intervenidas", valor: 24.38 },
      { titulo: "Aeropuertos no concesionados mejorados", valor: 6.67 },
      { titulo: "Vías férreas estructuradas y/o adjudicadas", valor: 28.92 },
      { titulo: "Balance primario del SPNF", valor: -105.88 },
      { titulo: "Variación de ingresos de micronegocios atendidos", valor: 0.0 },
      {
        titulo:
          "Unidades productivas de economía popular con inclusión financiera",
        valor: 870.9,
      },
      {
        titulo:
          "Proveedores de economía popular que usan mecanismos desde 2023",
        valor: 30.73,
      },
      {
        titulo: "Activos especiales para fortalecer economías populares",
        valor: 152.5,
      },
    ],
  },

  mujeres: {
    indicadores: [
      {
        titulo: "Hectáreas entregadas a mujeres rurales (fondo de tierras)",
        valor: 37.16,
      },
      {
        titulo:
          "Participación de mujeres rurales en crédito agropecuario y rural",
        valor: 70.24,
      },
      { titulo: "Títulos formalizados a mujeres rurales", valor: 30.94 },
      { titulo: "Fecundidad en adolescentes 15–19 años", valor: 100.0 },
      {
        titulo: "Mujeres víctimas de violencias con atención en salud",
        valor: 95.99,
      },
      {
        titulo:
          "Mujeres adolescentes y jóvenes con métodos de larga duración",
        valor: 18.23,
      },
      {
        titulo:
          "Mujeres con cáncer de mama detectado en estadios tempranos",
        valor: 52.11,
      },
      {
        titulo: "Mujeres en cargos directivos en entidades públicas",
        valor: 84.25,
      },
    ],
  },

  social: {
    indicadores: [
      {
        titulo: "Razón de mortalidad materna (por 100.000 nacidos vivos)",
        valor: 9.24,
      },
      { titulo: "Hogares con déficit habitacional", valor: 83.2 },
      { titulo: "Organizaciones solidarias fomentadas", valor: 59.0 },
      {
        titulo:
          "Unidades productivas de economía popular con inclusión financiera",
        valor: 870.9,
      },
      {
        titulo: "Pobreza multidimensional del campesinado",
        valor: 27.42,
      },
    ],
  },

  ecologico: {
    indicadores: [
      { titulo: "Riesgo de calidad del agua (urbana)", valor: 75.0 },
      { titulo: "Riesgo de calidad del agua (rural)", valor: -23.11 },
      {
        titulo: "Capacidad de generación eléctrica a partir de FNCER",
        valor: 81.97,
      },
      {
        titulo:
          "Usuarios con generación FNCER en comunidades energéticas",
        valor: 33.78,
      },
      {
        titulo: "Proyectos de bioeconomía para transformación productiva",
        valor: 83.33,
      },
      {
        titulo:
          "Áreas en restauración o recuperación de ecosistemas",
        valor: 51.99,
      },
      {
        titulo: "Deforestación nacional (meta de reducción)",
        valor: 278.11,
      },
      {
        titulo: "Negocios verdes en zonas con cultivos ilícitos",
        valor: 0.0,
      },
      {
        titulo: "Reciclaje en el servicio público de aseo",
        valor: 12.0,
      },
    ],
  },

  afro: {
    indicadores: [
      {
        titulo: "Promedio de 71 indicadores del PND Afrocolombiano",
        valor: 29.8,
      },
      { titulo: "Avances en institucionalidad y gestión", valor: 68.26 },
      { titulo: "Avances en derechos sociales básicos", valor: 23.74 },
      { titulo: "Liderazgo y coordinación interinstitucional", valor: 9.45 },
      { titulo: "Indicadores de gestión cumplidos", valor: 6.52 },
    ],
  },

  comunitario: {
    indicadores: [
      {
        titulo:
          "Sistemas de alerta temprana institucional y comunitarios",
        valor: 39.54,
      },
      {
        titulo:
          "Hogares con acompañamiento para superar pobreza extrema",
        valor: 39.54,
      },
      {
        titulo:
          "Organizaciones comunitarias para agua y saneamiento",
        valor: 39.54,
      },
    ],
  },

  territoriales: {
    pie: [
      { label: "Articulación de planes territoriales con el PND", valor: 65 },
      { label: "Proyectos priorizados con enfoque PND", valor: 40 },
      { label: "Participación de CTP en seguimiento", valor: 55 },
      { label: "Capacidad técnica territorial", valor: 45 },
      { label: "Uso de información para decisiones", valor: 50 },
    ],
  },
};

// ================= HELPERS =================
let charts = {};

function shortenLabel(text, maxLen = 32) {
  if (!text) return "";
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + "…";
}

function getNumericVals(lista) {
  return lista.map((ind) => {
    const v = Number(ind.valor);
    return Number.isFinite(v) ? v : 0;
  });
}

function formatPercent(value) {
  return value.toFixed(2).replace(".", ",") + "%";
}

function formatValue(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "";
  if (Math.abs(n) <= 300) {
    return formatPercent(n);
  }
  return n.toLocaleString("es-CO", { maximumFractionDigits: 2 });
}

function makeChart(id, type, labels, datasets, extraOptions = {}) {
  const canvas = document.getElementById(id);
  if (!canvas || typeof Chart === "undefined") return;

  const ctx = canvas.getContext("2d");
  if (charts[id]) charts[id].destroy();

  charts[id] = new Chart(ctx, {
    type,
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: { display: true, position: "bottom" },
      },
      ...extraOptions,
    },
  });
}

function makeSectorBarChart(canvasId, lista) {
  const fullLabels = lista.map((i) => i.titulo || i.label);
  const shortLabels = fullLabels.map((t) => shortenLabel(t));
  const vals = getNumericVals(lista);
  const colors = lista.map(
    (_, i) => `hsl(${(i * 360) / lista.length}, 70%, 55%)`
  );

  makeChart(
    canvasId,
    "bar",
    shortLabels,
    [
      {
        label: "Valor",
        data: vals,
        backgroundColor: colors,
      },
    ],
    {
      indexAxis: "y",
      scales: {
        x: { beginAtZero: true },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: (items) => fullLabels[items[0].dataIndex],
            label: (ctx) => formatValue(ctx.parsed.x ?? ctx.parsed.y),
          },
        },
      },
    }
  );
}

function makeSectorPieChart(canvasId, lista) {
  const fullLabels = lista.map((i) => i.titulo || i.label);
  const shortLabels = fullLabels.map((t) => shortenLabel(t));
  const vals = getNumericVals(lista);
  const colors = lista.map(
    (_, i) => `hsl(${(i * 360) / lista.length}, 70%, 55%)`
  );

  makeChart(
    canvasId,
    "pie",
    shortLabels,
    [
      {
        data: vals,
        backgroundColor: colors,
      },
    ],
    {
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 12,
            font: { size: 9 },
            padding: 6,
          },
        },
        tooltip: {
          callbacks: {
            title: (items) => fullLabels[items[0].dataIndex],
            label: (ctx) => `${formatValue(ctx.parsed)}`,
          },
        },
      },
    }
  );
}

// ================= TARJETAS DE INDICADORES =================
function renderCards(sectorKey, containerId, lista) {
  const root = document.getElementById(containerId);
  if (!root || !lista) return;
  root.innerHTML = "";

  lista.forEach((ind) => {
    const card = document.createElement("div");
    card.className = "ind-card";
    card.innerHTML = `
      <div class="ind-title">
        ${ind.titulo || ind.label}
      </div>
      <div class="ind-meta">
        Valor de seguimiento: <strong>${formatValue(ind.valor)}</strong>
      </div>
    `;
    root.appendChild(card);
  });
}

function setIndicatorCount(sectorKey, count) {
  const el = document.querySelector(`[data-ind-count="${sectorKey}"]`);
  if (el) el.textContent = count;
}

// ================= GENERAL =================
function loadGeneral() {
  const base = dataPND.general.avance;
  const av = base;
  const pe = 100 - base;

  const labelAv = document.getElementById("globalPercent");
  const bar = document.getElementById("globalProgress");

  if (labelAv) labelAv.textContent = formatPercent(av);
  if (bar) bar.style.width = `${Math.max(0, Math.min(av, 100))}%`;

  makeChart(
    "generalChart",
    "doughnut",
    ["Avance", "Por ejecutar"],
    [
      {
        data: [av, pe],
        backgroundColor: ["#0033a0", "#fcd116"],
      },
    ],
    {
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${formatPercent(ctx.parsed)}`,
          },
        },
      },
    }
  );

  const labels = dataPND.general.sectores.map((s) => s.nombre);
  const vals = dataPND.general.sectores.map((s) => s.avance);

  makeChart(
    "sectorsChart",
    "bar",
    labels.map((t) => shortenLabel(t)),
    [
      {
        type: "bar",
        label: "Avance por sector (%)",
        data: vals,
        backgroundColor: "#0033a0",
      },
      {
        type: "line",
        label: `Línea general (${formatPercent(av)})`,
        data: labels.map(() => av),
        borderColor: "#ce1126",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.3,
      },
    ],
    {
      scales: {
        y: { beginAtZero: true, max: 100 },
      },
      plugins: {
        legend: { position: "bottom" },
      },
    }
  );
}

// ================= SECTORES =================
function loadEducativo() {
  const lista = dataPND.educativo.indicadores;
  makeSectorBarChart("eduChart", lista);
  makeSectorPieChart("eduPie", lista);
  renderCards("edu", "eduIndicators", lista);
  setIndicatorCount("edu", lista.length);
}

function loadEconomico() {
  const lista = dataPND.economico.indicadores;
  makeSectorBarChart("ecoChart", lista);
  makeSectorPieChart("ecoPie", lista);
  renderCards("eco", "ecoIndicators", lista);
  setIndicatorCount("eco", lista.length);
}

function loadMujeres() {
  const lista = dataPND.mujeres.indicadores;
  makeSectorBarChart("mujChart", lista);
  makeSectorPieChart("mujPie", lista);
  renderCards("muj", "mujIndicators", lista);
  setIndicatorCount("muj", lista.length);
}

function loadSocial() {
  const lista = dataPND.social.indicadores;
  makeSectorBarChart("socChart", lista);
  makeSectorPieChart("socPie", lista);
  renderCards("soc", "socIndicators", lista);
  setIndicatorCount("soc", lista.length);
}

function loadEco2() {
  const lista = dataPND.ecologico.indicadores;
  makeSectorBarChart("eco2Chart", lista);
  makeSectorPieChart("eco2Pie", lista);
  renderCards("eco2", "eco2Indicators", lista);
  setIndicatorCount("eco2", lista.length);
}

function loadAfro() {
  const lista = dataPND.afro.indicadores;
  makeSectorBarChart("afroChart", lista);
  makeSectorPieChart("afroPie", lista);
  renderCards("afro", "afroIndicators", lista);
  setIndicatorCount("afro", lista.length);
}

function loadCom() {
  const lista = dataPND.comunitario.indicadores;
  makeSectorBarChart("comChart", lista);
  makeSectorPieChart("comPie", lista);
  renderCards("com", "comIndicators", lista);
  setIndicatorCount("com", lista.length);
}

function loadTerr() {
  const lista = dataPND.territoriales.pie;
  makeSectorBarChart("terrChart", lista);
  makeSectorPieChart("terrPie", lista);
}

// ================= INICIALIZAR =================
function initAll() {
  setupTabs();
  loadGeneral();
  loadEducativo();
  loadEconomico();
  loadMujeres();
  loadSocial();
  loadEco2();
  loadAfro();
  loadCom();
  loadTerr();

  const chartReloadMap = {
    generalChart: loadGeneral,
    sectorsChart: loadGeneral,
    eduChart: loadEducativo,
    eduPie: loadEducativo,
    ecoChart: loadEconomico,
    ecoPie: loadEconomico,
    mujChart: loadMujeres,
    mujPie: loadMujeres,
    socChart: loadSocial,
    socPie: loadSocial,
    eco2Chart: loadEco2,
    eco2Pie: loadEco2,
    afroChart: loadAfro,
    afroPie: loadAfro,
    comChart: loadCom,
    comPie: loadCom,
    terrChart: loadTerr,
    terrPie: loadTerr,
  };

  document.querySelectorAll(".chart-refresh").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.refresh;
      const fn = chartReloadMap[id];
      if (typeof fn === "function") fn();
    });
  });
}

document.addEventListener("DOMContentLoaded", initAll);
