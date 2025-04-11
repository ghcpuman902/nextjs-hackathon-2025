-- CreateTable
CREATE TABLE "Metric" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "path" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "metricDataId" TEXT NOT NULL,
    "connectionDataId" TEXT,

    CONSTRAINT "Metric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricData" (
    "id" TEXT NOT NULL,
    "CLS" DOUBLE PRECISION,
    "FCP" DOUBLE PRECISION,
    "INP" DOUBLE PRECISION,
    "LCP" DOUBLE PRECISION,
    "TTFB" DOUBLE PRECISION,
    "navigationTimingId" TEXT NOT NULL,

    CONSTRAINT "MetricData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NavigationTiming" (
    "id" TEXT NOT NULL,
    "domComplete" DOUBLE PRECISION,
    "domInteractive" DOUBLE PRECISION,
    "domContentLoadedEventEnd" DOUBLE PRECISION,
    "loadEventEnd" DOUBLE PRECISION,

    CONSTRAINT "NavigationTiming_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConnectionData" (
    "id" TEXT NOT NULL,
    "effectiveType" TEXT,
    "rtt" DOUBLE PRECISION,
    "downlink" DOUBLE PRECISION,

    CONSTRAINT "ConnectionData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Metric_metricDataId_key" ON "Metric"("metricDataId");

-- CreateIndex
CREATE UNIQUE INDEX "Metric_connectionDataId_key" ON "Metric"("connectionDataId");

-- CreateIndex
CREATE UNIQUE INDEX "MetricData_navigationTimingId_key" ON "MetricData"("navigationTimingId");

-- AddForeignKey
ALTER TABLE "Metric" ADD CONSTRAINT "Metric_metricDataId_fkey" FOREIGN KEY ("metricDataId") REFERENCES "MetricData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metric" ADD CONSTRAINT "Metric_connectionDataId_fkey" FOREIGN KEY ("connectionDataId") REFERENCES "ConnectionData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricData" ADD CONSTRAINT "MetricData_navigationTimingId_fkey" FOREIGN KEY ("navigationTimingId") REFERENCES "NavigationTiming"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
