// Angriffsdaten
const attacks = [
    {timestamp: "2024-12-10T10:15:30Z", ip: "192.168.0.1", type: "SQL Injection", severity: "high"},
    {timestamp: "2024-12-10T10:20:45Z", ip: "192.168.0.2", type: "DDoS", severity: "critical"},
    {timestamp: "2024-12-10T10:25:00Z", ip: "192.168.0.3", type: "XSS", severity: "medium"},
    {timestamp: "2024-12-10T10:30:15Z", ip: "192.168.0.1", type: "SQL Injection", severity: "high"},
    {timestamp: "2024-12-10T10:35:30Z", ip: "192.168.0.4", type: "Brute Force", severity: "low"},
];

// Statistiken berechnen
function calculateStatistics(data) {
    const typeCounts = {};
    const severityCounts = {};
    const ipCounts = {};

    data.forEach((attack) => {
        // Angriffe nach Typ
        typeCounts[attack.type] = (typeCounts[attack.type] || 0) + 1;

        // Angriffe nach Schweregrad
        severityCounts[attack.severity] = (severityCounts[attack.severity] || 0) + 1;

        // Angriffe nach IP-Adresse
        ipCounts[attack.ip] = (ipCounts[attack.ip] || 0) + 1;
    });

    const topIp = Object.entries(ipCounts).reduce(
        (max, [ip, count]) => (count > max.count ? {ip, count} : max),
        {ip: null, count: 0}
    );

    return {typeCounts, severityCounts, topIp};
}

// Diagramme zeichnen
function drawBarChart(ctx, data) {
    const types = Object.keys(data);
    const counts = Object.values(data);
    const maxCount = Math.max(...counts);

    const barWidth = 50;
    const gap = 20;
    const chartHeight = 200;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#007acc";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";

    types.forEach((type, index) => {
        const x = index * (barWidth + gap) + gap;
        const height = (data[type] / maxCount) * chartHeight;
        const y = chartHeight - height;

        ctx.fillRect(x, y, barWidth, height);
        ctx.fillStyle = "#333";
        ctx.fillText(type, x + barWidth / 2, chartHeight + 20);
        ctx.fillText(data[type], x + barWidth / 2, y - 10);
    });
}

function drawPieChart(ctx, data) {
    const severities = Object.keys(data);
    const counts = Object.values(data);
    const total = counts.reduce((sum, count) => sum + count, 0);

    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = 100;

    let startAngle = 0;

    severities.forEach((severity, index) => {
        const sliceAngle = (data[severity] / total) * Math.PI * 2;

        const colors = {
            low: "#4caf50",
            medium: "#ff9800",
            high: "#f44336",
            critical: "#9c27b0",
        };
        ctx.fillStyle = colors[severity] || "#000";

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();

        const textX = centerX + (radius / 1.5) * Math.cos(startAngle + sliceAngle / 2);
        const textY = centerY + (radius / 1.5) * Math.sin(startAngle + sliceAngle / 2);
        ctx.fillStyle = "#000";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText(severity, textX, textY);

        startAngle += sliceAngle;
    });
}

window.onload = () => {
    const barChartCanvas = document.getElementById("bar-chart");
    const pieChartCanvas = document.getElementById("pie-chart");
    const barChartCtx = barChartCanvas.getContext("2d");
    const pieChartCtx = pieChartCanvas.getContext("2d");
    const topIpElement = document.getElementById("top-ip");
    const resetButton = document.getElementById("reset-btn");

    const stats = calculateStatistics(attacks);

    drawBarChart(barChartCtx, stats.typeCounts);
    drawPieChart(pieChartCtx, stats.severityCounts);

    topIpElement.textContent = `IP: ${stats.topIp.ip} (${stats.topIp.count} Angriffe)`;

    resetButton.addEventListener("click", () => {
        drawBarChart(barChartCtx, stats.typeCounts);
        drawPieChart(pieChartCtx, stats.severityCounts);
    });
};
