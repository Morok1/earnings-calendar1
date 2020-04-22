package com.smagin.financehelper.pricetarget.controller;

import com.smagin.financehelper.pricetarget.integration.PriceTargetIntegrator;
import com.smagin.financehelper.pricetarget.model.CompanyNames;
import com.smagin.financehelper.pricetarget.model.Price;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PriceTargetController {
    private final PriceTargetIntegrator integrator;

    @GetMapping("/prices/{symbol}")
    public Price getPriceBy(@PathVariable("symbol") String symbol){

        Price priceByCompanyName = integrator.getPriceByCompanyName(symbol);
        return priceByCompanyName;
    }

    @GetMapping("/company-names")
    public Map<String, CompanyNames> companyNames(){
        return Arrays.stream(CompanyNames.values()).collect(Collectors.toMap(CompanyNames::getName, Function.identity()));
    }
}
