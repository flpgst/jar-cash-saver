<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["Transportes", "Pagamentos", "Compras", "Outros"],
      datasets: [
        {
          backgroundColor: ["#f87979", "#f7b500", "#44d7b6", "#6236ff"],
          weight: 15,
          data: [10, 20, 35, 45]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: "right"
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
