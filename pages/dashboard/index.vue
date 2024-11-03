<template>
  <NuxtLayout name="dashboard">
    <div class="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      <div
        class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      >
        <div class="w-full">
          <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">New products</h3>
          <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
          <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                ></path>
              </svg>
              12.5%
            </span>
            Since last month
          </p>
        </div>
        <div class="w-full" id="new-products-chart" style="min-height: 155px">
          <div
            id="apexchartsixm78xjtl"
            class="apexcharts-canvas apexchartsixm78xjtl apexcharts-theme-light"
            style="width: 225px; height: 140px"
          >
            <svg
              id="SvgjsSvg2990"
              width="225"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev"
              class="apexcharts-svg"
              xmlns:data="ApexChartsNS"
              transform="translate(0, 0)"
              style="background: transparent"
            >
              <g id="SvgjsG2992" class="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)">
                <defs id="SvgjsDefs2991">
                  <linearGradient id="SvgjsLinearGradient2996" x1="0" y1="0" x2="0" y2="1">
                    <stop id="SvgjsStop2997" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop>
                    <stop id="SvgjsStop2998" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                    <stop id="SvgjsStop2999" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                  </linearGradient>
                  <clipPath id="gridRectMaskixm78xjtl">
                    <rect
                      id="SvgjsRect3001"
                      width="212"
                      height="83"
                      x="-4.5"
                      y="-2.5"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                  <clipPath id="forecastMaskixm78xjtl"></clipPath>
                  <clipPath id="nonForecastMaskixm78xjtl"></clipPath>
                  <clipPath id="gridRectMarkerMaskixm78xjtl">
                    <rect
                      id="SvgjsRect3002"
                      width="207"
                      height="82"
                      x="-2"
                      y="-2"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                </defs>
                <rect
                  id="SvgjsRect3000"
                  width="26.1"
                  height="78"
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  opacity="1"
                  stroke-width="0"
                  stroke-dasharray="3"
                  fill="url(#SvgjsLinearGradient2996)"
                  class="apexcharts-xcrosshairs"
                  y2="78"
                  filter="none"
                  fill-opacity="0.9"
                ></rect>
                <g id="SvgjsG3021" class="apexcharts-xaxis" transform="translate(0, 0)">
                  <g id="SvgjsG3022" class="apexcharts-xaxis-texts-g" transform="translate(0, 4)"></g>
                </g>
                <g id="SvgjsG3031" class="apexcharts-grid">
                  <g id="SvgjsG3032" class="apexcharts-gridlines-horizontal" style="display: none">
                    <line
                      id="SvgjsLine3034"
                      x1="0"
                      y1="0"
                      x2="203"
                      y2="0"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3035"
                      x1="0"
                      y1="19.5"
                      x2="203"
                      y2="19.5"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3036"
                      x1="0"
                      y1="39"
                      x2="203"
                      y2="39"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3037"
                      x1="0"
                      y1="58.5"
                      x2="203"
                      y2="58.5"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3038"
                      x1="0"
                      y1="78"
                      x2="203"
                      y2="78"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                  </g>
                  <g id="SvgjsG3033" class="apexcharts-gridlines-vertical" style="display: none"></g>
                  <line
                    id="SvgjsLine3040"
                    x1="0"
                    y1="78"
                    x2="203"
                    y2="78"
                    stroke="transparent"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                  ></line>
                  <line
                    id="SvgjsLine3039"
                    x1="0"
                    y1="1"
                    x2="0"
                    y2="78"
                    stroke="transparent"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                  ></line>
                </g>
                <g id="SvgjsG3003" class="apexcharts-bar-series apexcharts-plot-series">
                  <g id="SvgjsG3004" class="apexcharts-series" rel="1" seriesName="Quantity" data:realIndex="0">
                    <path
                      id="SvgjsPath3008"
                      d="M 1.4499999999999993 78L 1.4499999999999993 14.700000000000003Q 1.4499999999999993 11.700000000000003 4.449999999999999 11.700000000000003L 19.55 11.700000000000003Q 22.55 11.700000000000003 22.55 14.700000000000003L 22.55 14.700000000000003L 22.55 78L 22.55 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke="transparent"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMaskixm78xjtl)"
                      pathTo="M 1.4499999999999993 78L 1.4499999999999993 14.700000000000003Q 1.4499999999999993 11.700000000000003 4.449999999999999 11.700000000000003L 19.55 11.700000000000003Q 22.55 11.700000000000003 22.55 14.700000000000003L 22.55 14.700000000000003L 22.55 78L 22.55 78z"
                      pathFrom="M 1.4499999999999993 78L 1.4499999999999993 78L 22.55 78L 22.55 78L 22.55 78L 22.55 78L 22.55 78L 1.4499999999999993 78"
                      cy="11.700000000000003"
                      cx="27.95"
                      j="0"
                      val="170"
                      barHeight="66.3"
                      barWidth="26.1"
                    ></path>
                    <path
                      id="SvgjsPath3010"
                      d="M 30.45 78L 30.45 10.800000000000011Q 30.45 7.800000000000011 33.45 7.800000000000011L 48.55 7.800000000000011Q 51.55 7.800000000000011 51.55 10.800000000000011L 51.55 10.800000000000011L 51.55 78L 51.55 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke="transparent"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMaskixm78xjtl)"
                      pathTo="M 30.45 78L 30.45 10.800000000000011Q 30.45 7.800000000000011 33.45 7.800000000000011L 48.55 7.800000000000011Q 51.55 7.800000000000011 51.55 10.800000000000011L 51.55 10.800000000000011L 51.55 78L 51.55 78z"
                      pathFrom="M 30.45 78L 30.45 78L 51.55 78L 51.55 78L 51.55 78L 51.55 78L 51.55 78L 30.45 78"
                      cy="7.800000000000011"
                      cx="56.95"
                      j="1"
                      val="180"
                      barHeight="70.19999999999999"
                      barWidth="26.1"
                    ></path>
                    <path
                      id="SvgjsPath3012"
                      d="M 59.45 78L 59.45 17.040000000000006Q 59.45 14.040000000000006 62.45 14.040000000000006L 77.55000000000001 14.040000000000006Q 80.55000000000001 14.040000000000006 80.55000000000001 17.040000000000006L 80.55000000000001 17.040000000000006L 80.55000000000001 78L 80.55000000000001 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke="transparent"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMaskixm78xjtl)"
                      pathTo="M 59.45 78L 59.45 17.040000000000006Q 59.45 14.040000000000006 62.45 14.040000000000006L 77.55000000000001 14.040000000000006Q 80.55000000000001 14.040000000000006 80.55000000000001 17.040000000000006L 80.55000000000001 17.040000000000006L 80.55000000000001 78L 80.55000000000001 78z"
                      pathFrom="M 59.45 78L 59.45 78L 80.55000000000001 78L 80.55000000000001 78L 80.55000000000001 78L 80.55000000000001 78L 80.55000000000001 78L 59.45 78"
                      cy="14.040000000000006"
                      cx="85.95"
                      j="2"
                      val="164"
                      barHeight="63.959999999999994"
                      barWidth="26.1"
                    ></path>
                    <path
                      id="SvgjsPath3014"
                      d="M 88.45 78L 88.45 24.450000000000003Q 88.45 21.450000000000003 91.45 21.450000000000003L 106.55000000000001 21.450000000000003Q 109.55000000000001 21.450000000000003 109.55000000000001 24.450000000000003L 109.55000000000001 24.450000000000003L 109.55000000000001 78L 109.55000000000001 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke="transparent"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMaskixm78xjtl)"
                      pathTo="M 88.45 78L 88.45 24.450000000000003Q 88.45 21.450000000000003 91.45 21.450000000000003L 106.55000000000001 21.450000000000003Q 109.55000000000001 21.450000000000003 109.55000000000001 24.450000000000003L 109.55000000000001 24.450000000000003L 109.55000000000001 78L 109.55000000000001 78z"
                      pathFrom="M 88.45 78L 88.45 78L 109.55000000000001 78L 109.55000000000001 78L 109.55000000000001 78L 109.55000000000001 78L 109.55000000000001 78L 88.45 78"
                      cy="21.450000000000003"
                      cx="114.95"
                      j="3"
                      val="145"
                      barHeight="56.55"
                      barWidth="26.1"
                    ></path>
                    <path
                      id="SvgjsPath3016"
                      d="M 117.45 78L 117.45 5.340000000000003Q 117.45 2.3400000000000034 120.45 2.3400000000000034L 135.55 2.3400000000000034Q 138.55 2.3400000000000034 138.55 5.340000000000003L 138.55 5.340000000000003L 138.55 78L 138.55 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke="transparent"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMaskixm78xjtl)"
                      pathTo="M 117.45 78L 117.45 5.340000000000003Q 117.45 2.3400000000000034 120.45 2.3400000000000034L 135.55 2.3400000000000034Q 138.55 2.3400000000000034 138.55 5.340000000000003L 138.55 5.340000000000003L 138.55 78L 138.55 78z"
                      pathFrom="M 117.45 78L 117.45 78L 138.55 78L 138.55 78L 138.55 78L 138.55 78L 138.55 78L 117.45 78"
                      cy="2.3400000000000034"
                      cx="143.95"
                      j="4"
                      val="194"
                      barHeight="75.66"
                      barWidth="26.1"
                    ></path>
                    <path
                      id="SvgjsPath3018"
                      d="M 146.45 78L 146.45 14.700000000000003Q 146.45 11.700000000000003 149.45 11.700000000000003L 164.54999999999998 11.700000000000003Q 167.54999999999998 11.700000000000003 167.54999999999998 14.700000000000003L 167.54999999999998 14.700000000000003L 167.54999999999998 78L 167.54999999999998 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke="transparent"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMaskixm78xjtl)"
                      pathTo="M 146.45 78L 146.45 14.700000000000003Q 146.45 11.700000000000003 149.45 11.700000000000003L 164.54999999999998 11.700000000000003Q 167.54999999999998 11.700000000000003 167.54999999999998 14.700000000000003L 167.54999999999998 14.700000000000003L 167.54999999999998 78L 167.54999999999998 78z"
                      pathFrom="M 146.45 78L 146.45 78L 167.54999999999998 78L 167.54999999999998 78L 167.54999999999998 78L 167.54999999999998 78L 167.54999999999998 78L 146.45 78"
                      cy="11.700000000000003"
                      cx="172.95"
                      j="5"
                      val="170"
                      barHeight="66.3"
                      barWidth="26.1"
                    ></path>
                    <path
                      id="SvgjsPath3020"
                      d="M 175.45 78L 175.45 20.550000000000004Q 175.45 17.550000000000004 178.45 17.550000000000004L 193.54999999999998 17.550000000000004Q 196.54999999999998 17.550000000000004 196.54999999999998 20.550000000000004L 196.54999999999998 20.550000000000004L 196.54999999999998 78L 196.54999999999998 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke="transparent"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="5"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMaskixm78xjtl)"
                      pathTo="M 175.45 78L 175.45 20.550000000000004Q 175.45 17.550000000000004 178.45 17.550000000000004L 193.54999999999998 17.550000000000004Q 196.54999999999998 17.550000000000004 196.54999999999998 20.550000000000004L 196.54999999999998 20.550000000000004L 196.54999999999998 78L 196.54999999999998 78z"
                      pathFrom="M 175.45 78L 175.45 78L 196.54999999999998 78L 196.54999999999998 78L 196.54999999999998 78L 196.54999999999998 78L 196.54999999999998 78L 175.45 78"
                      cy="17.550000000000004"
                      cx="201.95"
                      j="6"
                      val="155"
                      barHeight="60.449999999999996"
                      barWidth="26.1"
                    ></path>
                    <g id="SvgjsG3006" class="apexcharts-bar-goals-markers" style="pointer-events: none">
                      <g id="SvgjsG3007" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3009" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3011" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3013" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3015" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3017" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3019" className="apexcharts-bar-goals-groups"></g>
                    </g>
                  </g>
                  <g id="SvgjsG3005" class="apexcharts-datalabels" data:realIndex="0"></g>
                </g>
                <line
                  id="SvgjsLine3041"
                  x1="0"
                  y1="0"
                  x2="203"
                  y2="0"
                  stroke="#b6b6b6"
                  stroke-dasharray="0"
                  stroke-width="1"
                  stroke-linecap="butt"
                  class="apexcharts-ycrosshairs"
                ></line>
                <line
                  id="SvgjsLine3042"
                  x1="0"
                  y1="0"
                  x2="203"
                  y2="0"
                  stroke-dasharray="0"
                  stroke-width="0"
                  stroke-linecap="butt"
                  class="apexcharts-ycrosshairs-hidden"
                ></line>
                <g id="SvgjsG3043" class="apexcharts-yaxis-annotations"></g>
                <g id="SvgjsG3044" class="apexcharts-xaxis-annotations"></g>
                <g id="SvgjsG3045" class="apexcharts-point-annotations"></g>
              </g>
              <g id="SvgjsG3030" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g>
              <g id="SvgjsG2993" class="apexcharts-annotations"></g>
            </svg>
            <div class="apexcharts-legend" style="max-height: 70px"></div>
            <div class="apexcharts-tooltip apexcharts-theme-light">
              <div class="apexcharts-tooltip-title" style="font-family: Inter, sans-serif; font-size: 14px"></div>
              <div class="apexcharts-tooltip-series-group" style="order: 1">
                <span class="apexcharts-tooltip-marker" style="background-color: rgb(26, 86, 219)"></span>
                <div class="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px">
                  <div class="apexcharts-tooltip-y-group">
                    <span class="apexcharts-tooltip-text-y-label"></span
                    ><span class="apexcharts-tooltip-text-y-value"></span>
                  </div>
                  <div class="apexcharts-tooltip-goals-group">
                    <span class="apexcharts-tooltip-text-goals-label"></span
                    ><span class="apexcharts-tooltip-text-goals-value"></span>
                  </div>
                  <div class="apexcharts-tooltip-z-group">
                    <span class="apexcharts-tooltip-text-z-label"></span
                    ><span class="apexcharts-tooltip-text-z-value"></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"
            >
              <div class="apexcharts-yaxistooltip-text"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      >
        <div class="w-full">
          <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Users</h3>
          <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
          <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                ></path>
              </svg>
              3,4%
            </span>
            Since last month
          </p>
        </div>
        <div class="w-full" id="week-signups-chart" style="min-height: 155px">
          <div
            id="apexcharts2u3dfdqc"
            class="apexcharts-canvas apexcharts2u3dfdqc apexcharts-theme-light"
            style="width: 225px; height: 140px"
          >
            <svg
              id="SvgjsSvg3046"
              width="225"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev"
              class="apexcharts-svg"
              xmlns:data="ApexChartsNS"
              transform="translate(0, 0)"
              style="background: transparent"
            >
              <g id="SvgjsG3048" class="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)">
                <defs id="SvgjsDefs3047">
                  <linearGradient id="SvgjsLinearGradient3052" x1="0" y1="0" x2="0" y2="1">
                    <stop id="SvgjsStop3053" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop>
                    <stop id="SvgjsStop3054" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                    <stop id="SvgjsStop3055" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                  </linearGradient>
                  <clipPath id="gridRectMask2u3dfdqc">
                    <rect
                      id="SvgjsRect3057"
                      width="207"
                      height="78"
                      x="-2"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                  <clipPath id="forecastMask2u3dfdqc"></clipPath>
                  <clipPath id="nonForecastMask2u3dfdqc"></clipPath>
                  <clipPath id="gridRectMarkerMask2u3dfdqc">
                    <rect
                      id="SvgjsRect3058"
                      width="207"
                      height="82"
                      x="-2"
                      y="-2"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fff"
                    ></rect>
                  </clipPath>
                </defs>
                <rect
                  id="SvgjsRect3056"
                  width="7.25"
                  height="78"
                  x="0"
                  y="0"
                  rx="0"
                  ry="0"
                  opacity="1"
                  stroke-width="0"
                  stroke-dasharray="3"
                  fill="url(#SvgjsLinearGradient3052)"
                  class="apexcharts-xcrosshairs"
                  y2="78"
                  filter="none"
                  fill-opacity="0.9"
                ></rect>
                <g id="SvgjsG3084" class="apexcharts-xaxis" transform="translate(0, 0)">
                  <g id="SvgjsG3085" class="apexcharts-xaxis-texts-g" transform="translate(0, 4)"></g>
                </g>
                <g id="SvgjsG3094" class="apexcharts-grid">
                  <g id="SvgjsG3095" class="apexcharts-gridlines-horizontal" style="display: none">
                    <line
                      id="SvgjsLine3097"
                      x1="0"
                      y1="0"
                      x2="203"
                      y2="0"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3098"
                      x1="0"
                      y1="15.6"
                      x2="203"
                      y2="15.6"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3099"
                      x1="0"
                      y1="31.2"
                      x2="203"
                      y2="31.2"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3100"
                      x1="0"
                      y1="46.8"
                      x2="203"
                      y2="46.8"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3101"
                      x1="0"
                      y1="62.4"
                      x2="203"
                      y2="62.4"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                    <line
                      id="SvgjsLine3102"
                      x1="0"
                      y1="78"
                      x2="203"
                      y2="78"
                      stroke="#e0e0e0"
                      stroke-dasharray="0"
                      stroke-linecap="butt"
                      class="apexcharts-gridline"
                    ></line>
                  </g>
                  <g id="SvgjsG3096" class="apexcharts-gridlines-vertical" style="display: none"></g>
                  <line
                    id="SvgjsLine3104"
                    x1="0"
                    y1="78"
                    x2="203"
                    y2="78"
                    stroke="transparent"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                  ></line>
                  <line
                    id="SvgjsLine3103"
                    x1="0"
                    y1="1"
                    x2="0"
                    y2="78"
                    stroke="transparent"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                  ></line>
                </g>
                <g id="SvgjsG3059" class="apexcharts-bar-series apexcharts-plot-series">
                  <g id="SvgjsG3060" class="apexcharts-series" rel="1" seriesName="Users" data:realIndex="0">
                    <rect
                      id="SvgjsRect3063"
                      width="7.25"
                      height="78"
                      x="10.875"
                      y="0"
                      rx="3"
                      ry="3"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#374151"
                      class="apexcharts-backgroundBar"
                    ></rect>
                    <path
                      id="SvgjsPath3065"
                      d="M 10.875 78L 10.875 46.315999999999995Q 10.875 43.315999999999995 13.875 43.315999999999995L 15.125 43.315999999999995Q 18.125 43.315999999999995 18.125 46.315999999999995L 18.125 46.315999999999995L 18.125 78L 18.125 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="0"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMask2u3dfdqc)"
                      pathTo="M 10.875 78L 10.875 46.315999999999995Q 10.875 43.315999999999995 13.875 43.315999999999995L 15.125 43.315999999999995Q 18.125 43.315999999999995 18.125 46.315999999999995L 18.125 46.315999999999995L 18.125 78L 18.125 78z"
                      pathFrom="M 10.875 78L 10.875 78L 18.125 78L 18.125 78L 18.125 78L 18.125 78L 18.125 78L 10.875 78"
                      cy="43.315999999999995"
                      cx="39.875"
                      j="0"
                      val="1334"
                      barHeight="34.684000000000005"
                      barWidth="7.25"
                    ></path>
                    <rect
                      id="SvgjsRect3066"
                      width="7.25"
                      height="78"
                      x="39.875"
                      y="0"
                      rx="3"
                      ry="3"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#374151"
                      class="apexcharts-backgroundBar"
                    ></rect>
                    <path
                      id="SvgjsPath3068"
                      d="M 39.875 78L 39.875 17.689999999999998Q 39.875 14.689999999999998 42.875 14.689999999999998L 44.125 14.689999999999998Q 47.125 14.689999999999998 47.125 17.689999999999998L 47.125 17.689999999999998L 47.125 78L 47.125 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="0"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMask2u3dfdqc)"
                      pathTo="M 39.875 78L 39.875 17.689999999999998Q 39.875 14.689999999999998 42.875 14.689999999999998L 44.125 14.689999999999998Q 47.125 14.689999999999998 47.125 17.689999999999998L 47.125 17.689999999999998L 47.125 78L 47.125 78z"
                      pathFrom="M 39.875 78L 39.875 78L 47.125 78L 47.125 78L 47.125 78L 47.125 78L 47.125 78L 39.875 78"
                      cy="14.689999999999998"
                      cx="68.875"
                      j="1"
                      val="2435"
                      barHeight="63.31"
                      barWidth="7.25"
                    ></path>
                    <rect
                      id="SvgjsRect3069"
                      width="7.25"
                      height="78"
                      x="68.875"
                      y="0"
                      rx="3"
                      ry="3"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#374151"
                      class="apexcharts-backgroundBar"
                    ></rect>
                    <path
                      id="SvgjsPath3071"
                      d="M 68.875 78L 68.875 35.422Q 68.875 32.422 71.875 32.422L 73.125 32.422Q 76.125 32.422 76.125 35.422L 76.125 35.422L 76.125 78L 76.125 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="0"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMask2u3dfdqc)"
                      pathTo="M 68.875 78L 68.875 35.422Q 68.875 32.422 71.875 32.422L 73.125 32.422Q 76.125 32.422 76.125 35.422L 76.125 35.422L 76.125 78L 76.125 78z"
                      pathFrom="M 68.875 78L 68.875 78L 76.125 78L 76.125 78L 76.125 78L 76.125 78L 76.125 78L 68.875 78"
                      cy="32.422"
                      cx="97.875"
                      j="2"
                      val="1753"
                      barHeight="45.578"
                      barWidth="7.25"
                    ></path>
                    <rect
                      id="SvgjsRect3072"
                      width="7.25"
                      height="78"
                      x="97.875"
                      y="0"
                      rx="3"
                      ry="3"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#374151"
                      class="apexcharts-backgroundBar"
                    ></rect>
                    <path
                      id="SvgjsPath3074"
                      d="M 97.875 78L 97.875 46.472Q 97.875 43.472 100.875 43.472L 102.125 43.472Q 105.125 43.472 105.125 46.472L 105.125 46.472L 105.125 78L 105.125 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="0"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMask2u3dfdqc)"
                      pathTo="M 97.875 78L 97.875 46.472Q 97.875 43.472 100.875 43.472L 102.125 43.472Q 105.125 43.472 105.125 46.472L 105.125 46.472L 105.125 78L 105.125 78z"
                      pathFrom="M 97.875 78L 97.875 78L 105.125 78L 105.125 78L 105.125 78L 105.125 78L 105.125 78L 97.875 78"
                      cy="43.472"
                      cx="126.875"
                      j="3"
                      val="1328"
                      barHeight="34.528"
                      barWidth="7.25"
                    ></path>
                    <rect
                      id="SvgjsRect3075"
                      width="7.25"
                      height="78"
                      x="126.875"
                      y="0"
                      rx="3"
                      ry="3"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#374151"
                      class="apexcharts-backgroundBar"
                    ></rect>
                    <path
                      id="SvgjsPath3077"
                      d="M 126.875 78L 126.875 50.97Q 126.875 47.97 129.875 47.97L 131.125 47.97Q 134.125 47.97 134.125 50.97L 134.125 50.97L 134.125 78L 134.125 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="0"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMask2u3dfdqc)"
                      pathTo="M 126.875 78L 126.875 50.97Q 126.875 47.97 129.875 47.97L 131.125 47.97Q 134.125 47.97 134.125 50.97L 134.125 50.97L 134.125 78L 134.125 78z"
                      pathFrom="M 126.875 78L 126.875 78L 134.125 78L 134.125 78L 134.125 78L 134.125 78L 134.125 78L 126.875 78"
                      cy="47.97"
                      cx="155.875"
                      j="4"
                      val="1155"
                      barHeight="30.03"
                      barWidth="7.25"
                    ></path>
                    <rect
                      id="SvgjsRect3078"
                      width="7.25"
                      height="78"
                      x="155.875"
                      y="0"
                      rx="3"
                      ry="3"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#374151"
                      class="apexcharts-backgroundBar"
                    ></rect>
                    <path
                      id="SvgjsPath3080"
                      d="M 155.875 78L 155.875 38.568Q 155.875 35.568 158.875 35.568L 160.125 35.568Q 163.125 35.568 163.125 38.568L 163.125 38.568L 163.125 78L 163.125 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="0"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMask2u3dfdqc)"
                      pathTo="M 155.875 78L 155.875 38.568Q 155.875 35.568 158.875 35.568L 160.125 35.568Q 163.125 35.568 163.125 38.568L 163.125 38.568L 163.125 78L 163.125 78z"
                      pathFrom="M 155.875 78L 155.875 78L 163.125 78L 163.125 78L 163.125 78L 163.125 78L 163.125 78L 155.875 78"
                      cy="35.568"
                      cx="184.875"
                      j="5"
                      val="1632"
                      barHeight="42.432"
                      barWidth="7.25"
                    ></path>
                    <rect
                      id="SvgjsRect3081"
                      width="7.25"
                      height="78"
                      x="184.875"
                      y="0"
                      rx="3"
                      ry="3"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#374151"
                      class="apexcharts-backgroundBar"
                    ></rect>
                    <path
                      id="SvgjsPath3083"
                      d="M 184.875 78L 184.875 46.263999999999996Q 184.875 43.263999999999996 187.875 43.263999999999996L 189.125 43.263999999999996Q 192.125 43.263999999999996 192.125 46.263999999999996L 192.125 46.263999999999996L 192.125 78L 192.125 78z"
                      fill="rgba(26,86,219,1)"
                      fill-opacity="1"
                      stroke-opacity="1"
                      stroke-linecap="round"
                      stroke-width="0"
                      stroke-dasharray="0"
                      class="apexcharts-bar-area"
                      index="0"
                      clip-path="url(#gridRectMask2u3dfdqc)"
                      pathTo="M 184.875 78L 184.875 46.263999999999996Q 184.875 43.263999999999996 187.875 43.263999999999996L 189.125 43.263999999999996Q 192.125 43.263999999999996 192.125 46.263999999999996L 192.125 46.263999999999996L 192.125 78L 192.125 78z"
                      pathFrom="M 184.875 78L 184.875 78L 192.125 78L 192.125 78L 192.125 78L 192.125 78L 192.125 78L 184.875 78"
                      cy="43.263999999999996"
                      cx="213.875"
                      j="6"
                      val="1336"
                      barHeight="34.736000000000004"
                      barWidth="7.25"
                    ></path>
                    <g id="SvgjsG3062" class="apexcharts-bar-goals-markers" style="pointer-events: none">
                      <g id="SvgjsG3064" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3067" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3070" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3073" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3076" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3079" className="apexcharts-bar-goals-groups"></g>
                      <g id="SvgjsG3082" className="apexcharts-bar-goals-groups"></g>
                    </g>
                  </g>
                  <g id="SvgjsG3061" class="apexcharts-datalabels" data:realIndex="0"></g>
                </g>
                <line
                  id="SvgjsLine3105"
                  x1="0"
                  y1="0"
                  x2="203"
                  y2="0"
                  stroke="#b6b6b6"
                  stroke-dasharray="0"
                  stroke-width="1"
                  stroke-linecap="butt"
                  class="apexcharts-ycrosshairs"
                ></line>
                <line
                  id="SvgjsLine3106"
                  x1="0"
                  y1="0"
                  x2="203"
                  y2="0"
                  stroke-dasharray="0"
                  stroke-width="0"
                  stroke-linecap="butt"
                  class="apexcharts-ycrosshairs-hidden"
                ></line>
                <g id="SvgjsG3107" class="apexcharts-yaxis-annotations"></g>
                <g id="SvgjsG3108" class="apexcharts-xaxis-annotations"></g>
                <g id="SvgjsG3109" class="apexcharts-point-annotations"></g>
              </g>
              <g id="SvgjsG3093" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g>
              <g id="SvgjsG3049" class="apexcharts-annotations"></g>
            </svg>
            <div class="apexcharts-legend" style="max-height: 70px"></div>
            <div class="apexcharts-tooltip apexcharts-theme-light">
              <div class="apexcharts-tooltip-title" style="font-family: Inter, sans-serif; font-size: 14px"></div>
              <div class="apexcharts-tooltip-series-group" style="order: 1">
                <span class="apexcharts-tooltip-marker" style="background-color: rgb(26, 86, 219)"></span>
                <div class="apexcharts-tooltip-text" style="font-family: Inter, sans-serif; font-size: 14px">
                  <div class="apexcharts-tooltip-y-group">
                    <span class="apexcharts-tooltip-text-y-label"></span
                    ><span class="apexcharts-tooltip-text-y-value"></span>
                  </div>
                  <div class="apexcharts-tooltip-goals-group">
                    <span class="apexcharts-tooltip-text-goals-label"></span
                    ><span class="apexcharts-tooltip-text-goals-value"></span>
                  </div>
                  <div class="apexcharts-tooltip-z-group">
                    <span class="apexcharts-tooltip-text-z-label"></span
                    ><span class="apexcharts-tooltip-text-z-value"></span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"
            >
              <div class="apexcharts-yaxistooltip-text"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
      >
        <div class="w-full">
          <h3 class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Audience by age</h3>
          <div class="flex items-center mb-2">
            <div class="w-16 text-sm font-medium dark:text-white">50+</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 18%"></div>
            </div>
          </div>
          <div class="flex items-center mb-2">
            <div class="w-16 text-sm font-medium dark:text-white">40+</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 15%"></div>
            </div>
          </div>
          <div class="flex items-center mb-2">
            <div class="w-16 text-sm font-medium dark:text-white">30+</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 60%"></div>
            </div>
          </div>
          <div class="flex items-center mb-2">
            <div class="w-16 text-sm font-medium dark:text-white">20+</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div class="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style="width: 30%"></div>
            </div>
          </div>
        </div>
        <div id="traffic-channels-chart" class="w-full"></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
