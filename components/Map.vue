<template>
  <div class="map-container">
    <svg
      width="296.99997mm"
      height="210mm"
      viewBox="0 0 1122.5196 793.70081"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <defs id="defs1" />
      <g id="spiky-ridges" @mouseenter="bringToFront">
        <path
          style="fill: rgb(100, 90, 80); stroke: #000000; stroke-opacity: 1"
          d="m 689.56288,5.2140861 -45.62325,97.7641139 5.21408,140.78032 109.49581,130.35215 -13.03522,40.40917 37.80212,16.94578 335.00508,-100.37116 1.3034,-325.8803739 z"
          id="path4"
        />
      </g>
      <g id="great-fields" @mouseenter="bringToFront">
        <path
          style="fill: rgb(170, 210, 100); stroke: #000000; stroke-opacity: 1"
          d="M 220.29514,789.93404 391.05645,643.93963 406.69871,586.58467 583.97763,461.44661 679.13471,434.07266 727.365,499.24873 759.95304,612.6551 709.1157,789.93403 Z"
          id="path5"
        />
      </g>
      <g id="oasis" @mouseenter="bringToFront">
        <path
          style="fill: rgb(90, 200, 190); stroke: #000000; stroke-opacity: 1"
          d="m 684.34879,432.76914 57.35495,-16.94578 40.40916,19.55282 -20.85634,48.2303 -31.28452,13.03521 z"
          id="path6"
        />
      </g>
      <g id="enchanted-ruins" @mouseenter="bringToFront">
        <path
          style="fill: rgb(110, 90, 160); stroke: #000000; stroke-opacity: 1"
          d="m 731.27556,499.24873 33.89156,-13.03521 22.15987,-50.83734 331.09441,-100.37115 1.3035,454.929 H 713.02626 L 763.8636,610.04806 Z"
          id="path7"
        />
      </g>

      <NuxtLink
        to="/the-town"
        @mouseenter="bringToFront"
        style="display: inline; position: relative"
      >
        <g id="the-town">
          <path
            style="
              display: inline;
              fill: rgb(200, 120, 80);
              stroke: #000000;
              stroke-opacity: 1;
            "
            d="m 3.9105646,427.55505 194.2246954,-72.9972 87.33595,32.58804 117.31693,198.13526 -16.94578,58.65848 -170.76132,145.9944 -211.1704754,-10e-6 z"
            id="path1"
          />
          <text
            x="15%"
            y="75%"
            text-anchor="middle"
            dominant-baseline="middle"
            class="area-title-svg"
          >
            THE TOWN
          </text>
        </g>
      </NuxtLink>

      <g id="the-haze" @mouseenter="bringToFront">
        <path
          style="fill: rgb(140, 140, 160); stroke: #000000; stroke-opacity: 1"
          d="M 3.9105646,422.34097 198.13526,350.64729 286.77473,383.23532 402.78814,291.98882 398.87758,166.85075 487.51703,5.2140861 H 3.9105646 Z"
          id="path2"
        />
      </g>
      <g id="haunted-forest" style="display: inline" @mouseenter="bringToFront">
        <path
          style="fill: rgb(30, 60, 40); stroke: #000000; stroke-opacity: 1"
          d="M 492.73113,5.2140861 401.48462,169.45779 405.39519,294.59586 288.07825,385.84236 405.39519,583.97763 582.67411,457.53605 741.70374,411.91279 753.43543,374.11067 645.24315,243.75852 641.33258,100.37115 685.65231,5.2140861 Z"
          id="path3"
        />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
const bringToFront = (e: Event) => {
  const el = e.currentTarget as SVGElement;
  el.parentNode?.appendChild(el);
};
</script>

<style lang="scss">
.map-container {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;

  filter: saturate(200%);

  svg {
    height: 100%;
    overflow: visible;
  }
}

g {
  transition: transform 0.2s ease;
  transform-box: fill-box;
  transform-origin: center;
  cursor: pointer;
}

g:hover {
  transform: scale(1.08);
}

.area-title-svg {
  fill: white;
  font-size: 24px;
  font-weight: bold;
  pointer-events: none;
}
</style>
