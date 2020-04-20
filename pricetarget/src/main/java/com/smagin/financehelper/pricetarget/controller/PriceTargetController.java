package com.smagin.financehelper.pricetarget.controller;

import com.smagin.financehelper.pricetarget.integration.PriceTargetIntegrator;
import com.smagin.financehelper.pricetarget.model.Price;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PriceTargetController {
    private final PriceTargetIntegrator integrator;

    @GetMapping("/prices/{symbol}")
    public Price getPriceBy(@PathVariable("symbol") String symbol){
        return integrator.getPriceByCompanyName(symbol);
    }
}
