import { NextResponse } from "next/server";

const minorIssues = ["fuelQuantityIndicator", "navigationLights", "cockpitFireExtinguisher", "windshieldWipers", "tirePressure", "firstAidKitAvailability"];
const majorIssues = ["landingGear", "brakeSystem", "altimeterCalibration", "hydraulicFluidLevel", "oilPressureGauge", "avionicsSystems", "emergencyExitLights", "oxygenSupplyMask", "pitotTubeStaticPort"];

export async function GET() {
  let failedItem: string | null = null;
  const randomPercent = Math.random() * 100;

  if (randomPercent < 10) { // 10% chance of major failure
    failedItem = majorIssues[Math.floor(Math.random() * majorIssues.length)];
  } else if (randomPercent < 30) { // 20% chance of minor issue
    failedItem = minorIssues[Math.floor(Math.random() * minorIssues.length)];
  }

  const ocrData: Record<string, "OK" | "NOK"> = {}
  for (const item of [...minorIssues, ...majorIssues]) {
    ocrData[item] = item === failedItem ? "NOK" : "OK"
  }

  const status = majorIssues.some(issue => ocrData[issue] === "NOK") ? "FAIL" : "PASS"

  return NextResponse.json({
    ocrData,
    status
  })

}