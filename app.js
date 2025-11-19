// ========================================
//  Revista de Seguimiento PND 2022–2026
//  Versión fija para GitHub (sin edición)
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initCharts();
});

// ----------------------------------------
// 1. PESTAÑAS LATERALES
// ----------------------------------------
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;

      tabButtons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add("active");
    });
  });
}

// ----------------------------------------
// 2. GRÁFICAS (Chart.js)
// ----------------------------------------
const GLOBAL_ADVANCE = 59.18; // % avance general PND
const charts = {};

function initCharts() {
  if (typeof Chart === "undefined") {
    console.warn("Chart.js no está cargado");
    return;
  }

  // Estilo global
  Chart.defaults.font.family =
    "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = "#0f172a";
  Chart.defaults.plugins.legend.position = "bottom";

  initGlobalProgress();
  createGeneralChart();
  createSectorsChart();

  // Gráficas + tarjetas por sector
  createSectorChart("eduChart", "eduIndicators", [
    { code: "Cobertura", full: "Cobertura en educación inicial y básica", value: 72 },
    { code: "Media", full: "Cobertura en educación media", value: 65 },
    { code: "Infraest", full: "Mejoras en infraestructura educativa", value: 48 },
    { code: "Cultura", full: "Fortalecimiento de prácticas culturales", value: 70 },
    { code: "Analf", full: "Reducción del analfabetismo", value: 55 }
  ]);

  createSectorChart("ecoChart", "ecoIndicators", [
    { code: "Crecim", full: "Crecimiento económico real", value: 52 },
    { code: "InvPub", full: "Inversión pública en infraestructura", value: 45 },
    { code: "Empleo", full: "Generación de empleo digno", value: 50 },
    { code: "Agraria", full: "Implementación de la reforma agraria", value: 40 }
  ]);

  createSectorChart("mujChart", "mujIndicators", [
    { code: "Salud", full: "Acceso a servicios de salud para mujeres", value: 68 },
    { code: "Violenc", full: "Atención a violencias basadas en género", value: 74 },
    { code: "Tierra", full: "Acceso a tierra para las mujeres", value: 35 },
    { code: "Crédito", full: "Acceso a crédito y financiamiento", value: 38 },
    { code: "AutEcon", full: "Autonomía económica de las mujeres", value: 42 }
  ]);

  createSectorChart("socChart", "socIndicators", [
    { code: "Salud", full: "Mejoras en cobertura de salud", value: 60 },
    { code: "Protec", full: "Fortalecimiento de protección social", value: 57 },
    { code: "Vivienda", full: "Reducción del déficit habitacional", value: 35 },
    { code: "Pobreza", full: "Reducción de pobreza monetaria", value: 40 },
    { code: "ExtPobr", full: "Reducción de pobreza extrema", value: 38 }
  ]);

  createSectorChart("eco2Chart", "eco2Indicators", [
    { code: "Renov", full: "Capacidad instalada en energías renovables", value: 66 },
    { code: "Rest", full: "Hectáreas de restauración ecológica", value: 62 },
    { code: "Defor", full: "Reducción de la deforestación", value: 30 },
    { code: "Verdes", full: "Negocios verdes en zonas priorizadas", value: 40 },
    { code: "Agua", full: "Protección de fuentes hídricas", value: 55 }
  ]);

  createSectorChart("afroChart", "afroIndicators", [
    { code: "Planif", full: "Enfoque étnico en instrumentos de planificación", value: 42 },
    { code: "Invers", full: "Inversión dirigida a territorios afro", value: 35 },
    { code: "Derechos", full: "Garantía de derechos colectivos", value: 38 },
    { code: "Partic", full: "Participación efectiva de comunidades afro", value: 45 }
  ]);

  createSectorChart("comChart", "comIndicators", [
    { code: "Protec", full: "Protección a liderazgos sociales", value: 32 },
    { code: "Segur", full: "Condiciones de seguridad en territorios", value: 28 },
    { code: "Articul", full: "Articulación con organizaciones comunitarias", value: 40 }
  ]);

  // Botones de refresco (↻)
  const refreshButtons = document.querySelectorAll(".chart-refresh");
  refreshButtons.forEach((btn) => {
    const id = btn.dataset.refresh;
    btn.addEventListener("click", () => {
      const chart = charts[id];
      if (chart) chart.update();
    });
  });
}

// ----------------------------------------
// 2.1. Avance global (texto + barra)
// ----------------------------------------
function initGlobalProgress() {
  const percentEl = document.getElementById("globalPercent");
  const barEl = document.getElementById("globalProgress");

  if (percentEl) {
    percentEl.textContent = `${GLOBAL_ADVANCE.toFixed(2)
      .toString()
      .replace(".", ",")}%`;
  }
  if (barEl) {
    barEl.style.width = `${GLOBAL_ADVANCE}%`;
  }
}

// ----------------------------------------
// 2.2. Doughnut: avance vs pendiente
// ----------------------------------------
function createGeneralChart() {
  const canvas = document.getElementById("generalChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const data = {
    labels: ["Avance ejecutado", "Por ejecutar"],
    datasets: [
      {
        data: [GLOBAL_ADVANCE, 100 - GLOBAL_ADVANCE],
        backgroundColor: ["#0033a0", "#e5e7eb"],
        hoverOffset: 4
      }
    ]
  };

  charts.generalChart = new Chart(ctx, {
    type: "doughnut",
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "65%",
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 10
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || "";
              const value = context.parsed;
              return `${label}: ${value.toFixed(2)} %`;
            }
          }
        }
      }
    }
  });
}

// ----------------------------------------
// 2.3. Comparativo de sectores (barras + línea)
// ----------------------------------------
function createSectorsChart() {
  const canvas = document.getElementById("sectorsChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  const sectors = [
    { code: "Edu/Cult", label: "Educativo y cultural", value: 62 },
    { code: "Econ", label: "Económico", value: 55 },
    { code: "Muj", label: "Mujeres", value: 68 },
    { code: "Soc", label: "Social", value: 52 },
    { code: "Ecol", label: "Ecológico", value: 60 },
    { code: "Afro", label: "Afrocolombiano", value: 45 },
    { code: "Com", label: "Comunitario", value: 42 },
    { code: "Terr", label: "Entes territoriales", value: 50 }
  ];

  const labels = sectors.map((s) => s.code);
  const values = sectors.map((s) => s.value);

  const colors = [
    "#0033a0",
    "#ce1126",
    "#f97316",
    "#1f8947",
    "#6366f1",
    "#8b5cf6",
    "#0ea5e9",
    "#facc15"
  ];

  charts.sectorsChart = new Chart(ctx, {
    data: {
      labels,
      datasets: [
        {
          type: "bar",
          label: "Avance sectorial (%)",
          data: values,
          backgroundColor: colors,
          borderRadius: 6,
          maxBarThickness: 40
        },
        {
          type: "line",
          label: `Promedio PND (${GLOBAL_ADVANCE.toFixed(1)}%)`,
          data: values.map(() => GLOBAL_ADVANCE),
          borderColor: "#111827",
          borderWidth: 1.2,
          pointRadius: 0,
          borderDash: [6, 4],
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value) => value + "%"
          }
        },
        x: {
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: true
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (ctx) => {
              const idx = ctx[0].dataIndex;
              return sectors[idx].label;
            },
            label: (ctx) => {
              const isLine = ctx.dataset.type === "line";
              if (isLine) {
                return `Promedio PND: ${GLOBAL_ADVANCE.toFixed(1)} %`;
              }
              const idx = ctx.dataIndex;
              const v = ctx.parsed.y;
              return `${sectors[idx].label}: ${v.toFixed(1)} %`;
            }
          }
        }
      }
    }
  });
}

// ----------------------------------------
// 2.4. Plantilla para gráficas + tarjetas de sector
// ----------------------------------------
function createSectorChart(canvasId, gridId, indicators) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  charts[canvasId] = new Chart(ctx, {
    type: "bar",
    data: {
      labels: indicators.map((i) => i.code),
      datasets: [
        {
          label: "Avance (%)",
          data: indicators.map((i) => i.value),
          backgroundColor: "#0033a0",
          borderRadius: 6,
          maxBarThickness: 32
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: (value) => value + "%"
          }
        },
        x: {
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: true
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (ctx) => {
              const idx = ctx[0].dataIndex;
              return indicators[idx].full;
            },
            label: (ctx) => `${ctx.parsed.y.toFixed(1)} %`
          }
        }
      }
    }
  });

  // Tarjetas de indicadores (debajo de la gráfica)
  if (gridId) {
    const container = document.getElementById(gridId);
    if (container) {
      container.innerHTML = indicators
        .map(
          (ind) => `
        <article class="indicator-card">
          <h6 class="indicator-code">${ind.code}</h6>
          <p class="indicator-name">${ind.full}</p>
          <p class="indicator-value">${ind.value.toFixed(1)}%</p>
        </article>
      `
        )
        .join("");
    }
  }
}
