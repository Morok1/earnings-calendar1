package com.smagin.financehelper.pricetarget.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum CompanyNames {
    NETFLIX("NTFL"),
    APPLE("AAPL");

    private final String name;

}
