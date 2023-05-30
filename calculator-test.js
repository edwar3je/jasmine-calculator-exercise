
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 50000, years: 8, rate: 20})).toEqual('1047.66')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 200000, years: 10, rate: 8})).toEqual('2426.55')
});

/// etc
