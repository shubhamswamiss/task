import { AfterViewInit, Component } from '@angular/core';
declare var echarts: any; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initSalesRevenueChart();
    this.initTopCitiesChart();
    this.initProductSalesChart();
    this.initCatalogReportChart();
    this.initTopSalesCatalogChart();
    this.initMicrositesReportChart();
  }

  initSalesRevenueChart() {
    const chart = echarts.init(document.getElementById('salesRevenueChart'));
    const options = {
      // title: { text: 'Sales Analytics By Revenue' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Revenue',
          type: 'bar',
          data: [200000, 300000, 250000, 400000, 350000, 450000, 420000, 390000, 370000]
        },
        {
          name: 'Sales',
          type: 'line',
          data: [150000, 250000, 200000, 300000, 280000, 350000, 340000, 320000, 300000]
        }
      ]
    };
    chart.setOption(options);
  }

  initTopCitiesChart() {
    const chart = echarts.init(document.getElementById('topCitiesChart'));
    const options = {
      // title: { text: 'Top 5 Cities Sales' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Sales',
          type: 'line',
          data: [100000, 200000, 150000, 300000, 250000, 320000, 290000, 270000, 260000, 250000, 240000, 230000]
        }
      ]
    };
    chart.setOption(options);
  }

  initProductSalesChart() {
    const chart = echarts.init(document.getElementById('productSalesChart'));
    const options = {
      // title: { text: 'Product Wise Sales Report' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: { type: 'value' },
      series: [
        { name: 'Apparels', type: 'bar', data: [80000, 70000, 75000, 85000, 80000, 90000] },
        { name: 'Accessories', type: 'bar', data: [60000, 50000, 55000, 65000, 60000, 70000] },
        { name: 'Footwears', type: 'bar', data: [40000, 30000, 35000, 45000, 40000, 50000] }
      ]
    };
    chart.setOption(options);
  }

  initCatalogReportChart() {
    const chart = echarts.init(document.getElementById('catalogReportChart'));
    const options = {
      // title: { text: 'Customer Wise Catalog Report' },
      tooltip: { trigger: 'item' },
      legend: { orient: 'vertical', left: 'left' },
      series: [
        {
          name: 'Sales',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 200, name: 'Apparels' },
            { value: 100, name: 'Accessories' },
            { value: 120, name: 'Footwears' }
          ]
        }
      ]
    };
    chart.setOption(options);
  }

  initTopSalesCatalogChart() {
    const chart = echarts.init(document.getElementById('topSalesCatalogChart'));
    const options = {
      // title: { text: 'Top 3 Sales Catalogs' },
      tooltip: {},
      xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'Catalog A', type: 'line', data: [30000, 35000, 33000, 37000, 39000, 42000] },
        { name: 'Catalog B', type: 'line', data: [20000, 23000, 21000, 25000, 27000, 30000] },
        { name: 'Catalog C', type: 'line', data: [10000, 13000, 11000, 15000, 17000, 20000] }
      ]
    };
    chart.setOption(options);
  }

  initMicrositesReportChart() {
    const chart = echarts.init(document.getElementById('micrositesReportChart'));
    const options = {
      // title: { text: 'Microsites Wise Report' },
      tooltip: { trigger: 'item' },
      legend: { orient: 'vertical', left: 'left' },
      series: [
        {
          name: 'Microsites',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 400, name: 'Microsite A' },
            { value: 300, name: 'Microsite B' },
            { value: 200, name: 'Microsite C' }
          ]
        }
      ]
    };
    chart.setOption(options);
  }
}