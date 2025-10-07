// Datos reales de las eliminatorias 2024-2025
const partidos = [
    // Partidos ya jugados en 2024
    { id: 1, fecha: '2024-09-06', estadio: 'Curitiba', rival: 'Brasil', condicion: 'Visita', competencia: 'Eliminatorias', anio: 2024, hora: '20:30', tv: 'Cable', jugado: true },
    { id: 2, fecha: '2024-09-10', estadio: 'Quito', rival: 'Perú', condicion: 'Local', competencia: 'Eliminatorias', anio: 2024, hora: '19:00', tv: 'Señal Abierta', jugado: true },
    { id: 3, fecha: '2024-10-10', estadio: 'Quito', rival: 'Paraguay', condicion: 'Local', competencia: 'Eliminatorias', anio: 2024, hora: '19:00', tv: 'Señal Abierta', jugado: true },
    { id: 4, fecha: '2024-10-15', estadio: 'Montevideo', rival: 'Uruguay', condicion: 'Visita', competencia: 'Eliminatorias', anio: 2024, hora: '20:00', tv: 'Cable', jugado: true },
    { id: 5, fecha: '2024-11-14', estadio: 'Guayaquil', rival: 'Bolivia', condicion: 'Local', competencia: 'Eliminatorias', anio: 2024, hora: '19:00', tv: 'Señal Abierta', jugado: true },
    { id: 6, fecha: '2024-11-19', estadio: 'Barranquilla', rival: 'Colombia', condicion: 'Visita', competencia: 'Eliminatorias', anio: 2024, hora: '18:00', tv: 'Cable', jugado: true },
    
    // Partidos pendientes 2025
    { id: 7, fecha: '2025-03-21', estadio: 'Quito', rival: 'Venezuela', condicion: 'Local', competencia: 'Eliminatorias', anio: 2025, hora: '19:00', tv: 'Señal Abierta', jugado: false },
    { id: 8, fecha: '2025-03-25', estadio: 'Santiago', rival: 'Chile', condicion: 'Visita', competencia: 'Eliminatorias', anio: 2025, hora: '20:30', tv: 'Cable', jugado: false },
    { id: 9, fecha: '2025-06-04', estadio: 'Quito', rival: 'Brasil', condicion: 'Local', competencia: 'Eliminatorias', anio: 2025, hora: '19:00', tv: 'Señal Abierta', jugado: false },
    { id: 10, fecha: '2025-06-09', estadio: 'Lima', rival: 'Perú', condicion: 'Visita', competencia: 'Eliminatorias', anio: 2025, hora: '20:00', tv: 'Cable', jugado: false },
    { id: 11, fecha: '2025-09-09', estadio: 'Asunción', rival: 'Paraguay', condicion: 'Visita', competencia: 'Eliminatorias', anio: 2025, hora: '19:30', tv: 'Cable', jugado: false },
    { id: 12, fecha: '2025-09-14', estadio: 'Quito', rival: 'Argentina', condicion: 'Local', competencia: 'Eliminatorias', anio: 2025, hora: '19:00', tv: 'Señal Abierta', jugado: false }
];

const resultados = [
    // Resultados de partidos jugados
    { partidoId: 1, marcador: 'Brasil 1 - 0 Ecuador', estado: 'Perdido', goles: [], figura: 'Hernán Galíndez' },
    { partidoId: 2, marcador: 'Ecuador 1 - 0 Perú', estado: 'Ganado', goles: ['K. Páez (45+1")'], figura: 'Kendry Páez' },
    { partidoId: 3, marcador: 'Ecuador 0 - 0 Paraguay', estado: 'Empate', goles: [], figura: 'Piero Hincapié' },
    { partidoId: 4, marcador: 'Uruguay 0 - 0 Ecuador', estado: 'Empate', goles: [], figura: 'Alexander Domínguez' },
    { partidoId: 5, marcador: 'Ecuador 4 - 0 Bolivia', estado: 'Ganado', goles: ['E. Valencia (15")', 'K. Páez (45+1")', 'J. Sornoza (67")', 'J. Cifuentes (89")'], figura: 'Kendry Páez' },
    { partidoId: 6, marcador: 'Colombia 0 - 1 Ecuador', estado: 'Ganado', goles: ['J. Cifuentes (90+2")'], figura: 'José Cifuentes' }
];

const plantilla = [
    { nombre: 'Alexander Domínguez', posicion: 'Portero', dorsal: 1, club: 'Liga de Quito', foto: 'https://picsum.photos/seed/dom/128/128' },
    { nombre: 'Piero Hincapié', posicion: 'Defensa', dorsal: 3, club: 'Bayer Leverkusen', foto: 'https://picsum.photos/seed/piero/128/128' },
    { nombre: 'Pervis Estupiñán', posicion: 'Defensa', dorsal: 7, club: 'Brighton', foto: 'https://picsum.photos/seed/pervis/128/128' },
    { nombre: 'Moisés Caicedo', posicion: 'Mediocampista', dorsal: 23, club: 'Chelsea', foto: 'https://picsum.photos/seed/moises/128/128' },
    { nombre: 'Kendry Páez', posicion: 'Mediocampista', dorsal: 10, club: 'Independiente del Valle', foto: 'https://picsum.photos/seed/kendry/128/128' },
    { nombre: 'Enner Valencia', posicion: 'Delantero', dorsal: 13, club: 'Internacional', foto: 'https://picsum.photos/seed/enner/128/128' }
];

// Utilidades
function $(sel) { return document.querySelector(sel); }
function formatFecha(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('es-EC', { day: '2-digit', month: 'short', year: 'numeric' });
}

// Render Partidos
function renderPartidos(lista) {
    const cont = $('#partidos-list');
    cont.innerHTML = '';
    lista.forEach(p => {
        const res = resultados.find(r => r.partidoId === p.id);
        const estado = res?.estado;
        const estadoClase = estado === 'Ganado' ? 'win' : estado === 'Empate' ? 'draw' : estado === 'Perdido' ? 'loss' : '';
        const marcador = res?.marcador || 'Por jugar';
        const statusTag = p.jugado ? '<div class="tag" style="background: #1a2d1a; color: #4caf50;">Jugado</div>' : '<div class="tag" style="background: #2d1a1a; color: #ff9800;">Pendiente</div>';
        
        const html = `
            <article class="card">
                <h3>${p.rival} (${p.condicion})</h3>
                <div class="meta">${formatFecha(p.fecha)} · ${p.estadio} · ${p.hora}</div>
                <div class="tag">${p.competencia}</div>
                ${statusTag}
                <div class="meta">TV: ${p.tv}</div>
                <div class="score ${estadoClase}">${marcador}</div>
            </article>
        `;
        cont.insertAdjacentHTML('beforeend', html);
    });
}

// Render Resultados
function renderResultados() {
    const cont = $('#resultados-list');
    cont.innerHTML = '';
    resultados.forEach(r => {
        const p = partidos.find(x => x.id === r.partidoId);
        const estadoClase = r.estado === 'Ganado' ? 'win' : r.estado === 'Empate' ? 'draw' : 'loss';
        const goles = r.goles.length ? r.goles.map(g => `<li>${g}</li>`).join('') : '<li>Sin goles</li>';
        const html = `
            <article class="card">
                <h3>${r.marcador}</h3>
                <div class="meta">${formatFecha(p.fecha)} · vs ${p.rival} · ${p.condicion}</div>
                <div class="score ${estadoClase}">${r.estado}</div>
                <ul class="meta">${goles}</ul>
                <div class="meta">Figura: ${r.figura}</div>
            </article>
        `;
        cont.insertAdjacentHTML('beforeend', html);
    });
}

// Render Plantilla
function renderPlantilla(lista) {
    const cont = $('#plantilla-list');
    cont.innerHTML = '';
    lista.forEach(j => {
        const html = `
            <article class="card player">
                <img src="${j.foto}" alt="${j.nombre}">
                <div>
                    <div class="name">${j.nombre} · #${j.dorsal}</div>
                    <div class="role">${j.posicion} — ${j.club}</div>
                </div>
            </article>
        `;
        cont.insertAdjacentHTML('beforeend', html);
    });
}

// Filtros y navegación
function applyPartidosFilters() {
    const estado = $('#filtro-estado').value;
    const year = $('#filtro-anio').value;
    const rival = $('#filtro-rival').value.trim().toLowerCase();
    const lista = partidos.filter(p => {
        const okEstado = estado === 'todos' || 
                        (estado === 'jugados' && p.jugado) || 
                        (estado === 'pendientes' && !p.jugado);
        const okYear = year === 'todos' || String(p.anio) === year;
        const okRival = !rival || p.rival.toLowerCase().includes(rival);
        return okEstado && okYear && okRival;
    });
    renderPartidos(lista);
}

function applyPlantillaFilter() {
    const pos = $('#filtro-posicion').value;
    const lista = plantilla.filter(j => pos === 'todas' || j.posicion === pos);
    renderPlantilla(lista);
}

function setupNav() {
    const btn = document.querySelector('.nav-toggle');
    const list = document.querySelector('.nav-list');
    btn?.addEventListener('click', () => {
        const open = list.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
    });
    list?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        list.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
    }));
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    setupNav();
    renderPartidos(partidos);
    renderResultados();
    renderPlantilla(plantilla);

    $('#filtro-estado').addEventListener('change', applyPartidosFilters);
    $('#filtro-anio').addEventListener('change', applyPartidosFilters);
    $('#filtro-rival').addEventListener('input', applyPartidosFilters);
    $('#filtro-posicion').addEventListener('change', applyPlantillaFilter);
});


