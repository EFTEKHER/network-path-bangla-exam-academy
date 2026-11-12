const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const S=(title,why,math)=>({title,why,math});
export const tutorials=[
[
S('দেওয়া তথ্য ও লক্ষ্য','Period T মানে একটি cycle শেষ হতে যত সময় লাগে। Frequency হলো প্রতি second-এ cycle সংখ্যা।','T = 100 ms; find f in kHz'),
S('Milliseconds থেকে seconds','1 second = 1000 milliseconds, তাই ms-কে 1000 দিয়ে ভাগ করি।','T = 100 ÷ 1000 = 0.1 s'),
S('Reciprocal কেন?','একটি cycle লাগে 0.1 s; 1 s-এ cycle হবে 1 ÷ 0.1।','f = 1 / T = 1 / 0.1 = 10 Hz'),
S('Kilohertz-এ লিখি','1 kHz = 1000 Hz, তাই আবার 1000 দিয়ে ভাগ।','10 Hz = 10 ÷ 1000 = 0.01 kHz'),
S('ফল যাচাই','প্রতি cycle-এর সময় × প্রতি second-এ cycle সংখ্যা = 1।','0.1 s × 10 cycles/s = 1 cycle')],
[
S('দেওয়া তথ্য','প্রতি second-এ 2000 symbol পাঠায়; প্রত্যেক symbol বহন করে 4 bit।','Baud = 2000 symbols/s; n = 4 bits/symbol'),
S('কেন গুণ করব?','প্রতি symbol-এর 4 bit-কে সব 2000 symbol-এর জন্য গণনা করি। symbol unit কেটে যায়।','R = 2000 symbols/s × 4 bits/symbol'),
S('গুণ করে unit বদলাই','kilo মানে 1000; bits/s-ই bps।','R = 8000 bits/s = 8000 ÷ 1000 = 8 kbps'),
S('উল্টো করে যাচাই','মোট bit rate-কে প্রতি symbol-এর bit দিয়ে ভাগ করলে baud ফিরে পাই।','8000 ÷ 4 = 2000 symbols/s')],
[
S('(a) Rate বের করি','দেওয়া baud 1000; এক symbol-এ 4 bit।','R = baud × n = 1000 × 4 = 4000 bps'),
S('(b) এবার অজানা baud','দেওয়া bit rate 6000 bps এবং প্রতি symbol-এ 3 bit।','6000 = baud × 3'),
S('সমীকরণের দুই পাশ ভাগ','baud-কে আলাদা করতে দুই পাশ 3 দিয়ে ভাগ করি।','Baud = 6000 ÷ 3 = 2000 symbols/s'),
S('দুইটি উত্তর যাচাই','Rate ও baud এক নয়; তাদের অনুপাত হলো bits per symbol।','4000 ÷ 1000 = 4; 6000 ÷ 2000 = 3')],
[
S('দেওয়া তথ্য','এক মিনিটে 12000 frame; প্রত্যেকটিতে 10000 bit। Link capacity 10 Mbps।','Frames = 12000/min; size = 10000 bits/frame'),
S('এক মিনিটে মোট bit','frame × bits/frame করলে frame unit কেটে যায়।','12000 × 10000 = 120000000 bits/min'),
S('প্রতি second-এ কত?','এক মিনিটে 60 second, তাই মিনিটের মোট bit-কে 60 দিয়ে ভাগ।','120000000 ÷ 60 = 2000000 bps'),
S('Mbps-এ রূপান্তর','1 Mbps = 1000000 bps।','2000000 ÷ 1000000 = 2 Mbps'),
S('Capacity-এর কত শতাংশ?','Actual throughput ÷ maximum capacity × 100।','Utilization = (2 ÷ 10) × 100 = 20%')],
[
S('Power ratio','Output power অর্ধেক হলে যেকোনো সমান unit-এ input 2 ও output 1 ভাবতে পারি।','Pout / Pin = 1 / 2 = 0.5'),
S('Power-এর dB সূত্র','Power ratio-এর জন্য multiplier 10; voltage-এর 20 এখানে ব্যবহার হবে না।','G = 10 × log₁₀(Pout / Pin)'),
S('Logarithm কোথা থেকে?','Calculator-এ log(0.5) চাপুন। এর অর্থ 10-এর কোন power দিলে 0.5 হয়।','10⁻⁰·³⁰¹⁰³ ≈ 0.5; log₁₀(0.5) ≈ −0.30103'),
S('গুণ ও sign বুঝি','ঋণাত্মক gain মানে power কমেছে। Loss magnitude ধনাত্মক করে বলা যায়।','G = 10 × (−0.30103) = −3.0103 dB; loss ≈ 3.01 dB')],
[
S('তিন stage-এর পরিবর্তন','Loss ঋণাত্মক, amplification ধনাত্মক; ক্রমে −3, +7, −3 dB।','G₁ = −3 dB; G₂ = +7 dB; G₃ = −3 dB'),
S('dB কেন যোগ হয়?','Linear power ratios গুণ হয়; logarithm গুণকে যোগে বদলায়।','Gtotal = G₁ + G₂ + G₃'),
S('প্রথম দুইটি, তারপর তৃতীয়টি','আগে −3 + 7 = 4; এরপর আরও 3 dB loss।','−3 + 7 = 4; 4 − 3 = +1 dB'),
S('Linear ratio দিয়ে যাচাই','G = 10 log₁₀(ratio) থেকে ratio = 10^(G/10)।','Pout / Pin = 10^(1/10) ≈ 1.259; output ≈ 1.259 × input')],
[
S('দেওয়া তথ্য','Noiseless channel-এর জন্য Nyquist; B হলো bandwidth, L হলো signal levels।','B = 3000 Hz; L = 2'),
S('log₂L-এর মান','2¹ = 2, তাই 2 level-এ প্রতি symbol-এ 1 bit।','log₂2 = 1 bit/symbol'),
S('সূত্রে বসাই','Nyquist অনুযায়ী maximum symbol rate 2B; তাকে bits/symbol দিয়ে গুণ।','C = 2B log₂L = 2 × 3000 × 1 = 6000 bps'),
S('4 level হলে?','2² = 4, তাই প্রতি symbol-এ 2 bit।','log₂4 = 2; C = 2 × 3000 × 2 = 12000 bps')],
[
S('দেওয়া তথ্য','Noisy channel-এর Shannon capacity; এখানে 3162 সরাসরি ratio, dB নয়।','B = 3000 Hz; SNR = 3162'),
S('আগে bracket','সূত্র C = B log₂(1 + SNR); তাই SNR-এর সঙ্গে 1 যোগ হয়।','1 + SNR = 1 + 3162 = 3163'),
S('Base-2 log কীভাবে?','Calculator-এ log₂ না থাকলে log(3163) ÷ log(2) ব্যবহার করুন।','log₂3163 = log₁₀(3163) / log₁₀(2) ≈ 11.62707784'),
S('Bandwidth দিয়ে গুণ','Intermediate log-এ বেশি decimal রাখলে rounding error কম হয়।','C = 3000 × 11.62707784 ≈ 34881.23 bps'),
S('kbps ও বইয়ের rounding','1000 দিয়ে ভাগ। বইয়ের আগের rounding-এ 34860 bps আসতে পারে।','34881.23 ÷ 1000 ≈ 34.88 kbps')],
[
S('MHz-কে Hz করি','Mega মানে 10⁶; Shannon-এ bandwidth Hz-এ বসবে।','B = 1 MHz = 1000000 Hz; SNR = 63'),
S('Shannon capacity','1 + 63 = 64; 2⁶ = 64, তাই log₂64 = 6।','C = 1000000 × 6 = 6000000 bps'),
S('একই rate Nyquist-এ বসাই','এবার C ও B জানা; L অজানা।','6000000 = 2 × 1000000 × log₂L'),
S('দুই পাশ ভাগ করি','2 × 1000000 = 2000000; দুই পাশকে এটি দিয়ে ভাগ।','log₂L = 6000000 / 2000000 = 3'),
S('Log থেকে level','log₂L = 3-এর অর্থ 2³ = L। এটি ideal theoretical requirement।','L = 2³ = 8 signal levels')],
[
S('দেওয়া তথ্য','Voice-এর highest frequency 4000 Hz; quantization levels 256।','fmax = 4000 Hz; L = 256; channels = 1'),
S('Sampling rate কেন দ্বিগুণ?','Bandlimited signal-এর ideal Nyquist minimum sampling rate 2 × highest frequency।','fs = 2 × 4000 = 8000 samples/s'),
S('প্রতি sample-এর bit','256 level-কে binary code-এ লিখতে n bit লাগে, যেখানে 2ⁿ = 256।','2⁸ = 256 → n = log₂256 = 8 bits/sample'),
S('সব sample-এর bit যোগ','প্রতি second-এর sample × প্রতি sample-এর bit × channel।','R = 8000 × 8 × 1 = 64000 bps = 64 kbps')],
[
S('দেওয়া তথ্য','44100 হলো ইতিমধ্যে sampling rate; একে আবার দ্বিগুণ করব না। Stereo মানে 2 channel।','fs = 44100 samples/s; n = 16 bits/sample; ch = 2'),
S('এক channel-এর rate','প্রতি sample-এর 16 bit-কে 44100 sample-এর জন্য গুণ।','44100 × 16 = 705600 bits/s'),
S('দুই channel একসঙ্গে','Left ও right দুই channel-এর rate যোগ, অর্থাৎ 2 দিয়ে গুণ।','705600 × 2 = 1411200 bps'),
S('Mbps-এ লিখি','এটি raw PCM rate; file headers বা compression এখানে ধরা হয়নি।','1411200 ÷ 1000000 = 1.4112 Mbps')],
[
S('64-QAM-এর অর্থ','Constellation-এ 64টি possible symbol; প্রতিটি একটি binary group বোঝায়।','L = 64; symbol rate = 2400 baud'),
S('Bits per symbol','কোন power-এ 2 দিলে 64? 2⁶ = 64।','n = log₂64 = 6 bits/symbol'),
S('Rate গুণ করি','প্রতি second-এর symbol × প্রতিটি symbol-এর bit।','R = 2400 × 6 = 14400 bps = 14.4 kbps'),
S('Unit দিয়ে যাচাই','baud হলো symbols/s; এটি 14400 bps-এর সমান নয়।','2400 symbols/s × 6 bits/symbol = 14400 bits/s')],
[
S('প্রত্যেক device কয়টির সঙ্গে যুক্ত?','8টি device-এর একটি নিজেকে বাদ দিয়ে অন্য 7টির সঙ্গে যুক্ত।','n = 8; connections per device = n − 1 = 7'),
S('সব device-এর connection গুনি','8 × 7-এ A→B এবং B→A আলাদা করে গোনা হয়।','Ordered count = 8 × 7 = 56'),
S('কেন 2 দিয়ে ভাগ?','এক cable-এর দুই প্রান্ত দুবার গোনা হয়েছে, তাই unique cable অর্ধেক।','Links = n(n − 1)/2 = 56/2 = 28 cables'),
S('Ports যাচাই','প্রত্যেক cable-এ দুইটি endpoint/port।','Ports/device = 7; total ports = 8 × 7 = 56 = 2 × 28')],
[
S('Even parity-এর নিয়ম','Data ও parity bit মিলিয়ে মোট 1-এর সংখ্যা জোড় হতে হবে। এখানে parity শেষে বসাব।','p = 0 if data has even ones; p = 1 if odd'),
S('প্রথম data-তে 1 গুনি','1011001-এ 1 আছে position 1, 3, 4, 7-এ; মোট 4।','1 + 0 + 1 + 1 + 0 + 0 + 1 = 4'),
S('প্রথম parity bit','4 ইতিমধ্যে জোড়, তাই 0 দিলে জোড়ই থাকে।','1011001 | 0 → 10110010; total ones = 4'),
S('দ্বিতীয় data','1010001-এ 1 আছে 3টি; আর একটি 1 যোগে 4 হয়।','1010001 | 1 → 10100011; total ones = 3 + 1 = 4')],
[
S('চার bit-এর word','প্রতিটি word-এ 4 bit। যোগফলে 5ম bit হলে সেটি carry, নিচের 4 bit-এর সঙ্গে আবার যোগ হবে।','1001₂ = 9; 1110₂ = 14; 0011₂ = 3'),
S('প্রথম যোগ','9 + 14 = 23, binary-তে 10111; carry 1 ও নিচের 4 bit 0111।','  1001\n+ 1110\n=1 0111'),
S('Carry ঘুরিয়ে যোগ','End-around carry: 0111-এর সঙ্গে carry 1 যোগ করি।','0111 + 0001 = 1000'),
S('তৃতীয় word যোগ','1000-এর সঙ্গে 0011 যোগে carry ছাড়াই 1011।','1000 + 0011 = 1011'),
S('প্রতিটি bit উল্টাই','One’s complement-এ 1→0 ও 0→1।','Sum 1011 → checksum 0100'),
S('Receiver যাচাই','একই folded sum-এর সঙ্গে checksum যোগে সব bit 1 হয়।','1011 + 0100 = 1111 → complement 0000')],
[
S('Generator-এর degree','1101-এ 4 bit; highest power 3, তাই CRC হবে 3 bit।','g = 1101; degree = 4 − 1 = 3'),
S('Data-র শেষে zero','CRC-এর জন্য 3টি জায়গা রাখতে data 100100-এর শেষে 000 যোগ।','100100 | 000 = 100100000'),
S('প্রথম leading 1-এ XOR','Generator-কে বাম দিকের প্রথম 1-এর নিচে বসাই। XOR-এ সমান bit→0, আলাদা bit→1; borrow নেই।','100100000\n110100000 XOR\n010000000'),
S('দ্বিতীয় ও তৃতীয় XOR','প্রতিবার পরের leading 1-এর নিচে 1101 সরাই।','010000000 XOR 011010000 = 001010000\n001010000 XOR 001101000 = 000111000'),
S('চতুর্থ ও পঞ্চম XOR','শেষে remainder-এর degree generator-এর degree-এর কম হবে।','000111000 XOR 000110100 = 000001100\n000001100 XOR 000001101 = 000000001'),
S('শেষ তিন bit নিই','শেষ 3 bit 001; শুরুতে যোগ করা 000-এর জায়গায় এটি বসাই।','CRC = 001; frame = 100100 | 001 = 100100001'),
S('Receiver যাচাই','পাঠানো frame একই generator দিয়ে ভাগ করলে remainder 000 হবে।','100100001 mod₂ 1101 = 000')],
[
S('কত parity bit দরকার?','m data bit-এর সঙ্গে r parity bit ও no-error অবস্থা আলাদা করতে 2ʳ ≥ m + r + 1 চাই।','m = 7; find smallest r'),
S('ছোট মান থেকে পরীক্ষা','r = 1, 2, 3 যথাক্রমে 2, 4, 8 অবস্থা প্রকাশ করে; কোনোটিই যথেষ্ট নয়।','r=1: 2 < 9; r=2: 4 < 10; r=3: 8 < 11'),
S('পরের মান পরীক্ষা','r = 4-এ 16টি অবস্থা; দরকার 7 + 4 + 1 = 12।','2⁴ = 16 ≥ 12 → r = 4'),
S('Codeword length','Data ও parity bit যোগ করলে transmitted word-এর দৈর্ঘ্য।','m + r = 7 + 4 = 11 bits')],
[
S('Positions ঠিক করি','বাম থেকে 1-based position; 1, 2, 4 power-of-two বলে parity। Data যায় 3, 5, 6, 7-এ।','Position: 1  2  3  4  5  6  7\nRole:     P1 P2 D1 P4 D2 D3 D4\nBit:      ?  ?  1  ?  0  1  1'),
S('P1-এর group','যে position-এর binary-র শেষ bit 1, সেগুলো 1,3,5,7। Data ones = 1+0+1 = 2, ইতিমধ্যে even।','P1 ⊕ 1 ⊕ 0 ⊕ 1 = 0 → P1 = 0'),
S('P2-এর group','Binary position-এর 2-এর bit set: 2,3,6,7। Data ones = 3, তাই parity 1।','P2 ⊕ 1 ⊕ 1 ⊕ 1 = 0 → P2 = 1'),
S('P4-এর group','4-এর bit set: 4,5,6,7। Data ones = 0+1+1 = 2, তাই parity 0।','P4 ⊕ 0 ⊕ 1 ⊕ 1 = 0 → P4 = 0'),
S('সব bit পাশাপাশি লিখি','1→7 ক্রমে parity ও data সাজালে codeword পাওয়া যায়।','0 1 1 0 0 1 1 → 0110011')],
[
S('Received word বসাই','একটি bit error ধরে নিচ্ছি। বাম থেকে position গুনব।','Position: 1 2 3 4 5 6 7\nReceived: 0 1 1 0 1 1 1'),
S('C1 পরীক্ষা','Positions 1,3,5,7-এ মোট তিনটি 1; odd বলে even-parity check fails।','0 ⊕ 1 ⊕ 1 ⊕ 1 = 1 → C1 = 1'),
S('C2 পরীক্ষা','Positions 2,3,6,7-এ চারটি 1; even বলে pass।','1 ⊕ 1 ⊕ 1 ⊕ 1 = 0 → C2 = 0'),
S('C4 পরীক্ষা','Positions 4,5,6,7-এ তিনটি 1; odd বলে fail।','0 ⊕ 1 ⊕ 1 ⊕ 1 = 1 → C4 = 1'),
S('Syndrome থেকে position','High-to-low weight-এ C4 C2 C1 লিখি; 101₂-এর decimal মান 4+0+1।','101₂ = 1×4 + 0×2 + 1×1 = 5'),
S('Bit 5 উল্টাই','Received-এর position 5-এ 1 ছিল; সেটি 0 করি। একাধিক error-এর correction এখানে নিশ্চিত নয়।','0110111 → 0110011')],
[
S('আটটি place value','প্রতিটি octet 8 bit; বাম থেকে 2⁷ … 2⁰। কোনো weight নিলে 1, না নিলে 0।','128  64  32  16   8   4   2   1'),
S('192 ভাঙি','192 থেকে 128 বাদে 64; সেটিও নিলে অবশিষ্ট 0। বাকি weight লাগবে না।','192 = 128 + 64 → 11000000'),
S('168 ভাঙি','168−128=40; 64 নেওয়া যায় না; 40−32=8; 16 নেওয়া যায় না; 8 নিই।','168 = 128 + 32 + 8 → 10101000'),
S('101 ভাঙি','128 বড়, তাই প্রথম bit 0; 64,32,4,1 যোগে 101।','101 = 64 + 32 + 4 + 1 → 01100101'),
S('5 ভাঙি','4 + 1 = 5; 8 bit পূরণ করতে বামে zero রাখি।','5 = 4 + 1 → 00000101'),
S('চার octet জোড়া দিই','প্রতিটি octet ঠিক 8 bit থাকবে; dot শুধু separator।','192.168.101.5\n11000000.10101000.01100101.00000101')],
[
S('/28-এর অর্থ','প্রথম 28 bit network; IPv4-এ মোট 32 bit। প্রথম 3 octet-এ 24 network bit।','Host bits = 32 − 28 = 4; last-octet network bits = 28 − 24 = 4'),
S('Mask কোথা থেকে?','প্রথম 24 bit সব 1 → 255.255.255; শেষ octet-এ 4টি 1 ও 4টি 0।','11110000₂ = 128 + 64 + 32 + 16 = 240\nMask = 255.255.255.240'),
S('IP-র শেষ octet AND করি','50 = 32 + 16 + 2 → 00110010। AND-এ দুই bit 1 হলেই 1।','IP:   00110010\nMask: 11110000\nAND:  00110000 = 32 + 16 = 48'),
S('Block ও broadcast','4 host bit-এ 2⁴ = 16 address। 48 থেকে 16 address মানে শেষটি 48+15।','Network = 192.168.1.48\nBroadcast = 48 + 16 − 1 = 63 → 192.168.1.63'),
S('Usable host','Network ও broadcast বাদে প্রথম ও শেষ usable।','First = .49; last = .62; count = 16 − 2 = 14')],
[
S('Prefix থেকে host bits','IPv4-এর 32 bit-এর 27টি network, বাকি 5 host।','h = 32 − 27 = 5; addresses = 2⁵ = 32'),
S('Mask বানাই','শেষ octet-এ 27−24=3টি network bit 1।','11100000₂ = 128 + 64 + 32 = 224\nMask = 255.255.255.224'),
S('130 কোন block-এ?','প্রতি 32 address-এ পরের network; 130÷32-এর integer অংশ 4।','floor(130 / 32) × 32 = 4 × 32 = 128'),
S('শেষ address','128 থেকে 32 address মানে 128+31 = 159।','Network = 192.168.5.128; broadcast = 192.168.5.159'),
S('Usable range','প্রথম ও শেষ reserved address বাদ দিই।','First = .129; last = .158; usable = 32 − 2 = 30')],
[
S('Borrowed bits কেন?','প্রতি borrowed bit subnet সংখ্যা দ্বিগুণ করে। 6টি চাইলে অন্তত 2ˢ ≥ 6।','2² = 4 < 6; 2³ = 8 ≥ 6 → borrow s = 3'),
S('নতুন prefix','Parent /24-এর সঙ্গে borrowed 3 bit যোগ করি।','24 + 3 = /27; host bits = 32 − 27 = 5'),
S('Mask ও block','শেষ octet-এ 3টি network 1 → 11100000।','Mask = 255.255.255.224; block = 2⁵ = 32 addresses'),
S('Network start বানাই','0 থেকে প্রতিবার 32 যোগ করি। প্রথম 6টি ব্যবহার, শেষ 2টি reserve।','0, 32, 64, 96, 128, 160 | spare: 192, 224'),
S('একটি block খুলে দেখি','192.168.1.0/24 parent ধরলে প্রথম block 192.168.1.0/27। অন্য block-এও একই নিয়ম।','First = .1; last = .30; broadcast = .31\nUsable per subnet = 32 − 2 = 30')],
[
S('50 usable host চাই','Ordinary subnet-এ network ও broadcast-এর জন্য 2টি address লাগে।','2ʰ − 2 ≥ 50 → 2ʰ ≥ 52'),
S('ছোট power পরীক্ষা','2⁵=32 হলে usable 30; পরের power 2⁶=64 হলে usable 62।','h=5: 32−2=30 < 50\nh=6: 64−2=62 ≥ 50'),
S('Prefix বের করি','32টি IPv4 bit থেকে 6 host bit বাদ।','Prefix = 32 − 6 = /26'),
S('Mask বানাই','প্রথম 24 bit ও শেষ octet-এর আরও 2টি bit 1।','11000000₂ = 128 + 64 = 192\nMask = 255.255.255.192'),
S('ফল যাচাই','64টি মোট address থেকে 2টি বাদে 62 usable, তাই 50 host ধরবে।','62 − 50 = 12 spare usable addresses/subnet')],
[
S('বড় চাহিদা আগে','Parent 192.168.1.0/24; 256 address। বড় block আগে বসালে alignment ধরে রাখা সহজ।','Needs descending: 100, 50, 25, 10, 2'),
S('প্রতিটির জন্য smallest power','প্রয়োজন + 2 reserved address-এর সমান বা বড় সবচেয়ে ছোট power of two নিই।','100+2=102 → 128=2⁷ → /25\n50+2=52 → 64=2⁶ → /26\n25+2=27 → 32=2⁵ → /27\n10+2=12 → 16=2⁴ → /28\n2+2=4 → 4=2² → /30'),
S('প্রথম দুই block','প্রথমটি .0 থেকে 128 address। পরেরটি .128 থেকে 64 address। প্রত্যেক start নিজ block size দিয়ে বিভাজ্য।','.0/25: .0–.127\n.128/26: .128–.191'),
S('বাকি block বসাই','আগের block শেষের পরের address-এ পরবর্তী aligned block শুরু।','.192/27: .192–.223\n.224/28: .224–.239\n.240/30: .240–.243'),
S('Usable range','প্রতিটি block-এর প্রথম address network ও শেষ address broadcast; মাঝেরগুলো host।','.1–.126 (126); .129–.190 (62)\n.193–.222 (30); .225–.238 (14); .241–.242 (2)'),
S('মোট address যাচাই','Block sizes যোগ করে parent-এর মোট 256 থেকে বাদ দিই।','128+64+32+16+4 = 244 allocated\n256−244 = 12 free addresses: .244–.255')],
[
S('চারটি network যাচাই','প্রতিটি /24-এ শেষ octet host; তাই এক network-এ 256 address। Third octet 8,9,10,11 ধারাবাহিক।','4 networks × 256 addresses = 1024 addresses'),
S('Binary-র weight কোথা থেকে?','এক octet-এ 8 bit। ডান থেকে 2⁰,2¹…2⁷; যে weight লাগে তার bit 1।','128  64  32  16   8   4   2   1'),
S('8-কে 8 bit-এ লিখি','8 শুধু 8-এর weight নেয়; অন্য weight লাগে না। 8-এর আগে 4টি ও পরে 3টি zero।','8 = 0×128 + 0×64 + 0×32 + 0×16 + 1×8 + 0×4 + 0×2 + 0×1\n8 = 00001000'),
S('9, 10, 11 কীভাবে আসে?','8-এর সঙ্গে যথাক্রমে 1, 2, 2+1 যোগ হয়। তাই কেবল শেষ দুই position বদলায়।','9 = 8+1 → 00001001\n10 = 8+2 → 00001010\n11 = 8+2+1 → 00001011'),
S('Common prefix গুনি','বাম থেকে পাশাপাশি মিলাই। প্রথম 6 position সব row-এ 000010; position 7-এ প্রথম অমিল, তাই সেখানে থামি।','8:  000010 | 00\n9:  000010 | 01\n10: 000010 | 10\n11: 000010 | 11'),
S('/22 কেন?','192 ও 168 দুইটি সম্পূর্ণ octet সবার একই, তাই 8+8=16 bit। Third octet-এর একই 6 bit যোগ করি।','8 + 8 + 6 = 22 network bits\nAlso: /24 − log₂(4) = /24 − 2 = /22'),
S('Mask-এ 252 কোথা থেকে?','Mask-এ প্রথম 22 bit 1। প্রথম দুই octet 255; third octet-এ 6টি 1, বাকি 0।','11111111.11111111.11111100.00000000\n11111100₂ = 128+64+32+16+8+4 = 252\nMask = 255.255.252.0'),
S('Network ও range','Common prefix রেখে সব host bit 0 করলে 192.168.8.0। সব host bit 1 করলে 192.168.11.255।','Network = 192.168.8.0/22\nRange = 192.168.8.0 – 192.168.11.255'),
S('Alignment ও coverage যাচাই','4টি /24 একত্র করলে start third octet 4 দিয়ে বিভাজ্য চাই। 8÷4=2 ঠিক; 10 host bit-এ 1024 address।','8 mod 4 = 0; 2^(32−22) = 2¹⁰ = 1024\n4 × 256 = 1024 → exact coverage; 4 routes → 1 route')]
];
export function videoLinks(topic){return `<div class="video-links"><span>▶ YouTube tutorial খুঁজুন</span><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(topic+' networking step by step Bangla tutorial')}" target="_blank" rel="noopener">বাংলা walkthrough ↗</a><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(topic+' networking worked example step by step')}" target="_blank" rel="noopener">English walkthrough ↗</a><small>Topic-specific search results; choose a video that matches this method.</small></div>`}
export function tutorialHTML(steps){return steps.map((s,j)=>`<section class="teaching-step ${j?'hidden':''}"><div class="step-heading"><span>${String(j+1).padStart(2,'0')}</span><h3>${safe(s.title)}</h3></div><p class="bn">${safe(s.why)}</p><pre class="equation">${safe(s.math)}</pre></section>`).join('')}
export function supernetVisual(){return `<figure class="supernet-visual"><figcaption>একই 6 bit + বদলানো 2 bit</figcaption><div class="bit-scroll"><table><thead><tr><th>Decimal</th>${[128,64,32,16,8,4,2,1].map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${[8,9,10,11].map(n=>`<tr><th>${n}</th>${n.toString(2).padStart(8,'0').split('').map((v,i)=>`<td class="${i<6?'shared-bit':'variable-bit'}">${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p><span class="key shared-bit">সবুজ = common prefix 000010</span> <span class="key variable-bit">হলুদ = host bits 00–11</span></p><div class="route-blocks">${[8,9,10,11].map(n=>`<div>192.168.${n}.0/24<small>256 addresses</small></div>`).join('')}</div><div class="merge-arrow">↓ 4 × 256 = 1024 addresses ↓</div><div class="merged-route">192.168.8.0/22<small>192.168.8.0 → 192.168.11.255</small></div></figure>`}
export function miniVisual(i){let specific=mathVisual(i);if(specific)return specific;if(i===25)return supernetVisual();if(i===19)return `<div class="place-values">${[128,64,32,16,8,4,2,1].map((n,j)=>`<div><small>2<sup>${7-j}</sup></small><strong>${n}</strong></div>`).join('')}</div>`;if([20,21,22,23,24].includes(i))return `<div class="method-flow"><span>Required addresses</span><b>→</b><span>Host bits h</span><b>→</b><span>Prefix 32 − h</span><b>→</b><span>Network → hosts → broadcast</span></div>`;if([13,14,15,16,17,18].includes(i))return `<div class="method-flow"><span>Data bits</span><b>→</b><span>Add check bits</span><b>→</b><span>Transmit</span><b>→</b><span>Receiver checks</span></div>`;return `<div class="method-flow"><span>Given values + units</span><b>→</b><span>Formula</span><b>→</b><span>Substitute</span><b>→</b><span>Calculate & check units</span></div>`}
export function supernetSolution(raw){
 const list=raw.split(',').map(x=>x.trim());if(list.length<2||list.length>64||(list.length&(list.length-1)))throw Error('Give 2, 4, 8, 16, 32 or 64 equal /24 networks, separated by commas.');
 const nums=list.map(x=>{if(!/^\d{1,3}(\.\d{1,3}){3}\/24$/.test(x))throw Error('Use network addresses with /24, for example 192.168.8.0/24.');let a=x.split('/')[0].split('.').map(Number);if(a.some(v=>v>255)||a[3]!==0)throw Error('Each /24 must have valid octets and end in .0.');return a.reduce((n,v)=>n*256+v,0)}).sort((a,b)=>a-b);
 const ip=n=>[24,16,8,0].map(s=>Math.floor(n/2**s)%256).join('.'),count=nums.length,size=count*256,p=24-Math.log2(count),start=nums[0],last=start+size-1;
 if(nums.some((n,i)=>n!==start+i*256))throw Error('Networks must be distinct and contiguous: no gaps or duplicates.');
 if(start%size)throw Error('These networks are not aligned for one exact supernet. The starting /24 index must be divisible by '+count+'.');
 const b=n=>ip(n).split('.').map(v=>(+v).toString(2).padStart(8,'0')).join('.'), mask=ip(2**32-size);
 return {steps:[`Given ${count} equal /24 networks. Each contains 2^(32 − 24) = 2⁸ = 256 addresses.`,`Total addresses = ${count} × 256 = ${size} = 2^${32-p}. Therefore host bits = ${32-p}.`,`Networks in binary (each octet has 8 bits):<pre class="equation">${nums.map(n=>ip(n)+'\n'+b(n)).join('\n\n')}</pre>`,`Combining ${count} = 2^${24-p} networks releases ${24-p} network bits. New prefix = 24 − ${24-p} = /${p}. The first ${p} bits are common.`,`Mask = ${p} ones followed by ${32-p} zeros:<pre class="equation">${b(2**32-size)}\n${mask}</pre>`,`Alignment: ${start} mod ${size} = 0. The first network begins at the supernet boundary.`,`Result: <strong>${ip(start)}/${p}</strong>. Coverage ${ip(start)} – ${ip(last)}; ${count} routing entries → 1.`],html:`<div class="route-blocks">${nums.map(n=>`<div>${ip(n)}/24<small>256 addresses</small></div>`).join('')}</div><div class="merge-arrow">↓ ${count} networks combine ↓</div><div class="merged-route">${ip(start)}/${p}<small>Mask ${mask} · ${size} addresses</small></div>`};
}
export function solverIntro(k,v){
 const n=id=>Number(v(id)), f=x=>Number(x.toPrecision(10)).toLocaleString('en-US',{maximumFractionDigits:8});
 const text={
 subnet:'/p means the first p bits belong to the network. Write p ones then (32 − p) zeros for the mask. AND keeps an IP bit only where the mask bit is 1.',
 vlsm:'For each need N, add 2 reserved addresses, find the smallest 2ʰ ≥ N + 2, then use prefix 32 − h. Place largest aligned block first.',
 capacity:'log₂(x) asks: 2 to which power gives x? On a calculator use log(x) ÷ log(2). Nyquist uses levels; Shannon uses a linear SNR ratio.',
 rate:'L signal levels represent log₂(L) bits per symbol. For example 64 = 2⁶, so 64 levels carry 6 bits. Multiply symbols/s by bits/symbol.',
 pcm:'Sampling minimum = twice the highest signal frequency. L quantization levels need log₂(L) bits per sample. Multiply by samples/s and channel count.',
 frequency:'First convert time to seconds: ms ÷ 1000; µs ÷ 1000000. Frequency is cycles per second, so f = 1/T.',
 power:'Divide output power by input power in matching units. For power use 10 × log₁₀(ratio). A negative gain means power decreased.',
 throughput:'Count all bits sent in one minute, then divide by 60 seconds. 1 Mbps = 1000000 bits/s. Utilization compares actual rate to link capacity.',
 latency:'1 km = 1000 m; 1 Mbps = 1000000 bits/s; 1 ms = 0.001 s. Convert units before dividing. Propagation moves the signal; transmission puts bits on the link.',
 mesh:'Each of n devices connects to n − 1 others. n(n − 1) counts both A→B and B→A, so divide by 2 for unique cables or symmetric key pairs.',
 crc:'Generator degree = bit length − 1. Append that many zero bits, align the generator under the leading 1, then XOR: equal bits → 0, different bits → 1.',
 hamming:'Parity positions are powers of two (1,2,4,8…). Position j is checked by Pk when j’s binary representation includes the bit k. Even parity makes each checked group XOR to 0.',
 checksum:'Use equal-width binary words. Add normally; when a carry exceeds the word width, wrap it around and add it to the low bits. Finally flip every bit.',
 windows:'m binary positions represent 2ᵐ sequence numbers (0 to 2ᵐ − 1). Reserve enough sequence space to distinguish old frames from new frames.',
 hosts:'For ordinary usable hosts solve 2ʰ − 2 ≥ N. For subnet count solve 2ˢ ≥ required subnets. Choose the smallest integer that passes each inequality.'};
 let extra='';
 if(k==='vlsm')extra=v('needs').split(',').map(x=>{let need=+x,h=Math.max(2,Math.ceil(Math.log2(need+2)));return `${need} hosts + 2 = ${need+2} → 2^${h} = ${2**h} addresses → /${32-h}; usable = ${2**h-2}`}).join('\n');
 if(k==='hosts'){let h=Math.max(2,Math.ceil(Math.log2(n('n')+2)));extra=`Try h = ${h-1}: 2^${h-1} − 2 = ${2**(h-1)-2} < ${n('n')}\nTry h = ${h}: 2^${h} − 2 = ${2**h-2} ≥ ${n('n')}`}
 if(k==='capacity')extra=`log₂(${n('l')}) = log₁₀(${n('l')}) ÷ log₁₀(2) = ${f(Math.log2(n('l')))}`;
 if(k==='hamming'){let m=v('data').length,r=1;while(2**r<m+r+1)r++;extra=Array.from({length:r},(_,i)=>{let t=i+1;return `r=${t}: 2^${t}=${2**t}; m+r+1=${m+t+1} → ${2**t>=m+t+1?'enough':'too few'}`}).join('\n')}
 return `<div class="notice"><b>কেন এই পদ্ধতি? · Where the numbers come from</b><p>${safe(text[k]||'Combine only contiguous, correctly aligned equal-sized networks.')}</p>${extra?`<pre class="equation">${safe(extra)}</pre>`:''}</div>`;
}

function mathVisual(i){
 const tiles=(items,caption)=>`<figure class="math-visual"><figcaption>${caption}</figcaption><div class="math-tiles">${items.map(([a,b])=>`<div><strong>${a}</strong><small>${b}</small></div>`).join('')}</div></figure>`;
 if(i===0)return `<figure class="math-visual"><figcaption>1 second = 10 cycles × 0.1 second</figcaption><svg viewBox="0 0 600 105" role="img" aria-label="Ten cycles in one second, each lasting 100 milliseconds"><path d="${Array.from({length:10},(_,j)=>`M${j*56+20} 55 Q${j*56+34} 5 ${j*56+48} 55 Q${j*56+62} 105 ${j*56+76} 55`).join(' ')}" fill="none" stroke="currentColor" stroke-width="2"/><text x="20" y="103" font-size="12">0 s</text><text x="545" y="103" font-size="12">1 s</text></svg></figure>`;
 if([1,2,11].includes(i)){let b=i===11?['000000','000001','…','111111']:['0000','0001','…','1111'];return tiles(b.map(x=>[x,i===11?'6 bits / symbol':'4 bits / symbol']),i===11?'64 symbols = 2⁶ possible bit groups':'16 symbols = 2⁴ possible bit groups')}
 if(i===3)return tiles([['12000','frames / minute'],['× 10000','bits / frame'],['÷ 60','seconds / minute'],['2 Mbps','actual throughput']],'Count frames → bits → bits per second');
 if(i===4)return tiles([['2 units','input power'],['→ ½','power ratio'],['1 unit','output power'],['−3.01 dB','signed gain']],'Half the power → negative gain');
 if(i===5)return tiles([['−3 dB','stage 1'],['+7 dB','stage 2'],['−3 dB','stage 3'],['+1 dB','total gain']],'Cascaded stages: add signed dB');
 if([6,7,8].includes(i))return tiles(i===6?[['2 levels','0, 1'],['1 bit','per symbol'],['4 levels','00, 01, 10, 11'],['2 bits','per symbol']]:i===7?[['3162','signal / noise'],['+ 1','3163'],['log₂','11.627…'],['× 3000 Hz','34.88 kbps']]:[['1 MHz','bandwidth'],['63 + 1','64 = 2⁶'],['6 Mbps','capacity'],['8 = 2³','required levels']],'The numbers behind the formula');
 if([9,10].includes(i))return tiles(i===9?[['4000 Hz','highest frequency'],['× 2','8000 samples/s'],['256 = 2⁸','8 bits/sample'],['64 kbps','8000 × 8']]:[['44100','samples/s'],['× 16','bits/sample'],['× 2','stereo channels'],['1.4112 Mbps','raw audio rate']],'Sample rate × bits/sample × channels');
 if(i===12){const pts=Array.from({length:8},(_,j)=>[180+110*Math.cos(j*Math.PI/4),135+110*Math.sin(j*Math.PI/4)]);return `<figure class="math-visual"><figcaption>Full mesh: 8 devices, 28 distinct cables</figcaption><svg viewBox="0 0 360 280" role="img" aria-label="Eight nodes with one cable between every pair">${pts.flatMap(([x,y],a)=>pts.slice(a+1).map(([xx,yy])=>`<line x1="${x}" y1="${y}" x2="${xx}" y2="${yy}" stroke="#a4b8a2" stroke-width="1"/>`)).join('')}${pts.map(([x,y],j)=>`<circle cx="${x}" cy="${y}" r="14" fill="#174e3a"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="11" fill="white">${j+1}</text>`).join('')}</svg></figure>`}
 if(i===13)return tiles([['1011001','4 ones: even'],['+ 0','parity bit'],['1010001','3 ones: odd'],['+ 1','parity bit']],'Even parity: make the total number of ones even');
 if(i===14)return tiles([['1011','folded sum'],['↓ flip bits','1 ↔ 0'],['0100','checksum'],['1111','sum + checksum']],'One’s complement checksum');
 if([16,17,18].includes(i))return `<figure class="math-visual"><figcaption>Position → role (count from the left)</figcaption><div class="hamming-positions">${Array.from({length:7},(_,j)=>{let p=j+1,parity=!(p&(p-1));return `<div class="${parity?'shared-bit':'variable-bit'}"><small>${p}</small><strong>${parity?'P'+p:'D'}</strong></div>`}).join('')}</div><p class="small">Green = parity at 1, 2, 4 · Yellow = data at 3, 5, 6, 7</p></figure>`;
 if([20,21].includes(i)){let start=i===20?48:128,end=i===20?63:159;return tiles([['.'+start,'network'],['.'+(start+1),'first host'],['.'+(end-1),'last host'],['.'+end,'broadcast']],`One block: ${end-start+1} addresses; ${end-start-1} usable hosts`)}
 if(i===22)return tiles(['0','32','64','96','128','160','192','224'].map((x,j)=>['.'+x,j<6?'use subnet '+(j+1):'spare subnet']),'Borrow 3 bits → 8 equal /27 blocks');
 if(i===23)return tiles([['2⁵ = 32','30 usable: too few'],['2⁶ = 64','62 usable: enough'],['32 − 6','prefix /26'],['11000000','mask octet 192']],'Choose the smallest host block that fits');
 if(i===24)return `<figure class="math-visual"><figcaption>Parent /24: 256 address slots (block sizes shown)</figcaption><div class="allocation-bar">${[128,64,32,16,4,12].map((n,j)=>`<span style="flex:${n};background:${['#174e3a','#497d53','#799b52','#c1d58c','#d6ad54','#e1e7df'][j]}" title="${n} ${j===5?'free':'allocated'} addresses"></span>`).join('')}</div><div class="math-tiles">${[128,64,32,16,4,12].map((n,j)=>`<div><strong>${n}</strong><small>${['100 hosts','50 hosts','25 hosts','10 hosts','2 hosts','free'][j]}</small></div>`).join('')}</div></figure>`;
 return '';
}
const checks=[
 ['100 ms period হলে frequency কত Hz?',10,'1 ÷ (100 ÷ 1000) = 10 Hz'],
 ['2000 symbols/s × 4 bits/symbol = কত bps?',8000,'2000 × 4 = 8000 bps'],
 ['6000 bps এবং 3 bits/symbol হলে baud কত?',2000,'6000 ÷ 3 = 2000 symbols/s'],
 ['2 Mbps throughput, 10 Mbps capacity: utilization কত %?',20,'(2 ÷ 10) × 100 = 20%'],
 ['Output অর্ধেক হলে signed gain কত dB? (2 decimal)',-3.01,'10 × log₁₀(0.5) ≈ −3.01 dB'],
 ['−3 + 7 − 3 = মোট gain কত dB?',1,'−3 + 7 = 4; 4 − 3 = +1 dB'],
 ['B=3000 Hz, L=4 হলে Nyquist rate কত bps?',12000,'2 × 3000 × log₂4 = 2 × 3000 × 2 = 12000 bps'],
 ['Shannon result 34881.23 bps = কত kbps? (2 decimal)',34.88,'34881.23 ÷ 1000 ≈ 34.88 kbps'],
 ['log₂L=3 হলে L কত?',8,'L = 2³ = 8 levels'],
 ['8000 samples/s × 8 bits/sample = কত kbps?',64,'8000 × 8 ÷ 1000 = 64 kbps'],
 ['CD audio raw rate কত Mbps? (4 decimal)',1.4112,'44100 × 16 × 2 ÷ 1000000 = 1.4112 Mbps'],
 ['64-QAM-এ bits per symbol কত?',6,'2⁶ = 64, তাই log₂64 = 6'],
 ['8-device full mesh-এ unique cable কয়টি?',28,'8 × (8 − 1) ÷ 2 = 28'],
 ['Data-তে 3টি one থাকলে even parity bit কত?',1,'3 + 1 = 4, যা even'],
 ['1011-এর one’s complement লিখুন (4 bit)।','0100','প্রতিটি bit উল্টালে 1011 → 0100'],
 ['100100 data ও 1101 generator-এর CRC লিখুন (3 bit)।','001','XOR division-এর শেষ 3 bit = 001'],
 ['7 data bit-এর জন্য minimum parity bit কয়টি?',4,'2³ < 7+3+1; 2⁴ ≥ 7+4+1, তাই r=4'],
 ['Data 1011-এর Hamming code লিখুন (বাম থেকে position 1)।','0110011','P1=0, P2=1, P4=0; positions 1→7: 0110011'],
 ['Syndrome 101₂ হলে কোন position flip করবেন?',5,'1×4 + 0×2 + 1×1 = 5'],
 ['168-এর 8-bit binary লিখুন।','10101000','168 = 128 + 32 + 8 → 10101000'],
 ['192.168.1.50/28-এর network-এর last octet কত?',48,'floor(50 ÷ 16) × 16 = 48'],
 ['/27-এ ordinary usable hosts কত?',30,'32 − 27 = 5 host bits; 2⁵ − 2 = 30'],
 ['/24 থেকে অন্তত 6 subnet চাইলে নতুন prefix কত? (শুধু সংখ্যা)',27,'2³ = 8 ≥ 6; 24 + 3 = 27'],
 ['অন্তত 50 usable host চাইলে prefix কত? (শুধু সংখ্যা)',26,'2⁶ − 2 = 62; prefix = 32 − 6 = 26'],
 ['VLSM-এ মোট 244 address দিলে /24-এ free কয়টি?',12,'256 − 244 = 12 addresses'],
 ['চার /24 একত্র করলে নতুন prefix কত? (শুধু সংখ্যা)',22,'24 − log₂4 = 24 − 2 = 22']
];
export function checkHTML(i){let [q,a,why]=checks[i];return `<section class="answer-check" data-expected="${safe(a)}" data-numeric="${typeof a==='number'}"><h3>এবার নিজে করি · Quick check</h3><label>${safe(q)}<input class="check-input" type="text" inputmode="${typeof a==='number'?'decimal':'numeric'}" aria-label="${safe(q)}" autocomplete="off" placeholder="আপনার উত্তর…"></label><div class="tutorial-controls"><button class="check-answer primary" type="button">উত্তর যাচাই ✓</button><button class="show-answer" type="button">ব্যাখ্যাসহ উত্তর দেখুন</button></div><p class="check-feedback" role="status"></p><p class="check-solution hidden">${safe(why)}</p></section>`}
export function bindChecks(scope=document){scope.querySelectorAll('.answer-check').forEach(root=>{const input=root.querySelector('input'),feedback=root.querySelector('.check-feedback'),solution=root.querySelector('.check-solution');const check=()=>{let value=input.value.trim();if(!value){feedback.textContent='আগে একটি উত্তর লিখুন।';return}let okay=root.dataset.numeric==='true'?Number.isFinite(Number(value))&&Math.abs(Number(value)-Number(root.dataset.expected))<0.006:value===root.dataset.expected;feedback.textContent=okay?'✓ ঠিক হয়েছে! এবার পদ্ধতিটি নিজের ভাষায় বলুন।':'↻ আবার চেষ্টা করুন। ধাপগুলো দেখে formula ও unit মিলিয়ে নিন।';if(okay)solution.classList.remove('hidden')};root.querySelector('.check-answer').onclick=check;input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();check()}};root.querySelector('.show-answer').onclick=()=>{solution.classList.remove('hidden');feedback.textContent='Answer: '+root.dataset.expected}})}
export function bindSolverSteps(scope){scope.querySelectorAll('.guided-solver').forEach(root=>{let cards=[...root.querySelectorAll(':scope > .solver-step')],shown=1;const update=()=>{cards.forEach((c,i)=>c.classList.toggle('hidden',i>=shown));root.querySelector('.solver-progress').textContent=`Step ${shown} / ${cards.length}`;root.querySelector('.solver-next').disabled=shown===cards.length;root.querySelector('.solver-prev').disabled=shown===1};root.querySelector('.solver-next').onclick=()=>{shown++;update()};root.querySelector('.solver-prev').onclick=()=>{shown--;update()};root.querySelector('.solver-all').onclick=()=>{shown=cards.length;update()};root.querySelector('.solver-reset').onclick=()=>{shown=1;update()};update()})}
const watchVideos=[[/supernet/i,'Q4MArJTbUwk','Practical Networking · Supernetting (English)'],[/vlsm/i,'nnZbVs6JSZ8','Reverie2Success · VLSM step by step (বাংলা)'],[/hamming correction|hamming encode|hamming parity|hamming encode & fix/i,'wbH2VxzmoZk','Neso Academy · Hamming error correction (English)'],[/crc/i,'A9g6rTMblz4','Neso Academy · CRC, part 1 (English)']];
export function directVideo(topic){let v=watchVideos.find(([re])=>re.test(topic));return v?`<a class="watch-video" href="https://www.youtube.com/watch?v=${v[1]}" target="_blank" rel="noopener">▶ ${safe(v[2])} ↗</a>`:''}
export function registerTutorials(rows){for(const row of rows){tutorials.push(row.steps);checks.push(row.check)}}
