exports.calculo = function(req, res) {
  const { number } = req.body;
  if(!number) return res.status(400).end();

  let resto = number%2;
  return res.json(resto);

}