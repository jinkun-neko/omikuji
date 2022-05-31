'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
  const n = (Math.random() * 100) ;
  if (n < 35) btn.textContent = "小吉";
  if (n < 30) btn.textContent = "吉";
  if (n < 25) btn.textContent = "中吉";
	if (n < 6) btn.textContent = '凶';
	if (n < 3) btn.textContent = '大吉';
	if (n < 1) btn.textContent = '大凶';
  });  
}