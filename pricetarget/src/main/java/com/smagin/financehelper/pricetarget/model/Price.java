package com.smagin.financehelper.pricetarget.model;

import lombok.Data;

@Data
public class Price {
    private  String lastUpdated;
    private  String symbol;
    private  String targetHigh;
    private  String targetLow;
    private  String targetMean;
    private  String targetMedian;
}
