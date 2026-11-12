import {solveMath} from './solvers.js';
const extra=(page,title,tool,values,check)=>({page,title,tool,values,check,steps:solveMath(tool,values).steps});
export const extras=[
extra(9,'Practice · Period 250 µs → frequency','frequency',{t:250,unit:'µs'},['250 µs period হলে frequency কত Hz?',4000,'250 µs = 0.00025 s; 1 ÷ 0.00025 = 4000 Hz']),
extra(12,'Practice · SNR ratio ↔ dB','power',{input:1,output:1000},['SNR ratio 1000 হলে SNR dB কত?',30,'10 log₁₀1000 = 10 × 3 = 30 dB']),
extra(13,'Practice · Shannon with SNR in dB','capacity',{b:3000,l:16,snr:30,snrtype:'dB'},['30 dB-কে linear SNR ratio করলে কত?',1000,'10^(30/10) = 10³ = 1000']),
extra(17,'Practice · PCM with 1000 levels','pcm',{f:4000,l:1000,channels:1},['1000 quantization level-এর fixed word-এ bits/sample কত?',10,'2⁹=512 কম, 2¹⁰=1024 যথেষ্ট; ceil(log₂1000)=10']),
extra(11,'Practice · Propagation, transmission, total delay & BDP','latency',{distance:1000,speed:200000000,size:1000000,rate:10,other:2},['1000 km, speed 2×10⁸ m/s হলে propagation delay কত ms?',5,'1000×1000 ÷ 200000000 = 0.005 s = 5 ms']),
extra(25,'Practice · Mesh cables and cryptographic keys','mesh',{n:10},['10 user-এর pairwise symmetric key কয়টি?',45,'10×9÷2 = 45 unique pairs; asymmetric individual keys হলে 20']),
extra(34,'Practice · Four-bit ARQ windows','windows',{m:4},['4 sequence bit-এ Go-Back-N max window কত?',15,'2⁴ = 16 sequence values; GBN = 16−1 = 15']),
extra(43,'Practice · /31 point-to-point exception','subnet',{ip:'192.168.1.10',p:31},['/31 point-to-point link-এ usable endpoint কয়টি?',2,'এই exception-এ দুই address-ই endpoint; সাধারণ −2 rule ব্যবহার হয় না']),
extra(43,'Practice · /32 host route','subnet',{ip:'192.168.1.10',p:32},['/32 route মোট কয়টি address বোঝায়?',1,'Host bits = 32−32=0; 2⁰ = 1 address']),
extra(44,'Practice · Do hosts and subnet counts both fit?','hosts',{n:50,p:24,s:6},['/24 থেকে 8টি /27 করলে প্রতিটিতে usable hosts কত?',30,'5 host bit → 2⁵−2=30; তাই প্রতিটিতে 50 host একসঙ্গে fit হয় না']),
extra(45,'Practice · VLSM for 20, 10 and 5 hosts','vlsm',{ip:'192.168.10.0',p:24,needs:'20,10,5'},['20 host-এর জন্য ordinary block-এ মোট address কত?',32,'20+2=22; পরের যথেষ্ট power 2⁵=32 → /27']),
extra(31,'Practice · Eight-bit checksum carry wrap','checksum',{bits:8,words:'11111111,00000001'},['11111111 + 00000001 wrap করলে 8-bit sum লিখুন।','00000001','Raw 1 00000000; low 00000000 + carry 1 = 00000001']),
{page:8,title:'Practice · Asynchronous efficiency & overhead',check:['8 data + 1 start + 1 stop bit হলে efficiency কত %?',80,'Useful data 8 ÷ total transmitted 10 × 100 = 80%'],steps:[
{title:'Data ও extra bit আলাদা করি',why:'Start/stop bit timing-এর জন্য, payload data নয়।',math:'Data = 8 bits\nStart = 1 bit; stop = 1 bit'},
{title:'মোট transmitted bit',why:'Link-এ data ও timing overhead সব bit-ই পাঠাতে হয়।',math:'Total = 8 + 1 + 1 = 10 bits'},
{title:'Efficiency',why:'Transmitted total-এর কত অংশ useful data তা ভাগ করে শতাংশ করি।',math:'Efficiency = 8 / 10 × 100 = 80%'},
{title:'দুই overhead percentage আলাদা করি',why:'Denominator total হলে 20%; data-only হলে 25%। প্রশ্নে কোনটি চায় দেখুন।',math:'Overhead / transmitted = 2 / 10 × 100 = 20%\nOverhead / data = 2 / 8 × 100 = 25%'}]},
{page:9,title:'Practice · Channel bandwidth from frequency limits',check:['200–3400 Hz channel-এর bandwidth কত Hz?',3200,'Upper−lower = 3400−200 = 3200 Hz'],steps:[
{title:'দুই frequency limit লিখি',why:'Frequency bandwidth একটি range-এর প্রস্থ; এটি নিজে bit rate নয়।',math:'Lowest = 200 Hz\nHighest = 3400 Hz'},
{title:'উপরের মান থেকে নিচের মান বাদ',why:'Range-এর width পেতে শেষ থেকে শুরু বাদ দিই।',math:'B = fhigh − flow\n= 3400 − 200 = 3200 Hz'},
{title:'Unit বদলাই ও অর্থ বুঝি',why:'1000 Hz = 1 kHz। Capacity bps পেতে আরও signal/noise তথ্য দরকার।',math:'3200 / 1000 = 3.2 kHz\nBandwidth = 3200 Hz, not 3200 bps'}]},
{page:11,title:'Practice · Transmission time for a byte-sized message',check:['1 MB message, 10 Mbps link: transmission delay কত second?',0.8,'Decimal 1 MB=1000000 bytes=8000000 bits; ÷10000000 bps=0.8 s'],steps:[
{title:'Byte ও bit আলাদা করি',why:'Capital B হলো byte, lowercase b হলো bit; এক byte-এ 8 bit। এখানে decimal MB নিচ্ছি।',math:'Message = 1 MB = 1000000 bytes\nBits = 1000000 × 8 = 8000000 bits'},
{title:'Mbps থেকে bps',why:'Mega মানে 1000000; একই unit ছাড়া ভাগ করা যাবে না।',math:'10 Mbps = 10 × 1000000 = 10000000 bits/s'},
{title:'সব bit পাঠাতে সময়',why:'এক second-এ link যত bit নেয়, মোট bit-কে সেই rate দিয়ে ভাগ করি।',math:'Ttx = 8000000 / 10000000 = 0.8 s = 800 ms'},
{title:'Model-এর সীমা বুঝি',why:'এটি শুধু transmission time। Propagation, queue, processing ও headers আলাদা।',math:'Total latency = Ttx + Tprop + Tqueue + Tprocessing'}]}
];
