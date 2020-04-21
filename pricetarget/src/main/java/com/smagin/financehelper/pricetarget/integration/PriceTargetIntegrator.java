package com.smagin.financehelper.pricetarget.integration;

import com.smagin.financehelper.pricetarget.model.Price;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Optional;
import java.util.function.Supplier;
import java.util.function.UnaryOperator;

@Component
@RequiredArgsConstructor
public class PriceTargetIntegrator {
    public static final String PRICE_TARGET_URL = "https://finnhub.io/api/v1/stock/price-target";

    @Autowired
    private final RestTemplate restTemplate;
    private Supplier<String> token  = () -> "bqcsrp7rh5rdevg56gd0";


    public Price getPriceByCompanyName(String symbol){
        final String URL = stringStringFunction.apply(symbol);
        return restTemplate.getForObject(URL, Price.class);
    }
    private  UnaryOperator<String> stringStringFunction =
            symbol -> PRICE_TARGET_URL + "?symbol=" + symbol + "&token=" + Optional.ofNullable(token.get()).orElse("");
}
