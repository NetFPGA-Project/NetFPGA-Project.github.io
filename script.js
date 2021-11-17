function embed(){
	document.getElementById('content').innerHTML = content;
	clear();
	document.getElementById('home').classList.add('curr');
}
function embed1(){
	document.getElementById('content').innerHTML = content1;
	clear();
	document.getElementById('week1').classList.add('curr');
}
function embed2(){
	document.getElementById('content').innerHTML = content2;
	clear();
	document.getElementById('week2').classList.add('curr');
}
function embed3(){
	document.getElementById('content').innerHTML = content3;
	clear();
	document.getElementById('week3').classList.add('curr');
}
function embed4(){
	document.getElementById('content').innerHTML = content4;
	clear();
	document.getElementById('week4').classList.add('curr');
}
function embed5(){
	document.getElementById('content').innerHTML = content5;
	clear();
	document.getElementById('week5').classList.add('curr');
}

function clear(){
	document.getElementById('home').classList.remove('curr');
	document.getElementById('week1').classList.remove('curr');
	document.getElementById('week2').classList.remove('curr');
	document.getElementById('week3').classList.remove('curr');
	document.getElementById('week4').classList.remove('curr');
	document.getElementById('week5').classList.remove('curr');
}

var tog = 0;
if(screen.width <= 600){
	document.getElementById('sidebar').style.display="none";
}
function toggle(){
	tog++;
	if(tog%2 ==1){
		document.getElementById('sidebar').style.display="block";
	}
	else if(tog%2 == 0){
		document.getElementById('sidebar').style.display="none";
	}
}

var content=`<h3><div align="center"><img class="brand" src="https://www.sarsen.net/uploads/files/images/Intel%20FPGA%20Logo.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://user-images.githubusercontent.com/48672827/57464068-a2a35580-72ae-11e9-9d52-7cadbf0cb940.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" height="35px"><br>Ho Chi Minh University of Technology</div></h3>
<br><h1><div align="center">HLS With NetFPGA-SUME<br><br></div></h1>
<br><h3>Members</h3>
<ul>
<li>Nguyen Ly Dang Khoa &raquo; 1952785</li>
<li>Nguyen Dinh Nam &raquo; 1952858</li>`;

var content1=`<h3><div align="center"><img class="brand" src="https://www.sarsen.net/uploads/files/images/Intel%20FPGA%20Logo.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://user-images.githubusercontent.com/48672827/57464068-a2a35580-72ae-11e9-9d52-7cadbf0cb940.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" height="35px"><br>Ho Chi Minh University of Technology</div></h3>
<br><h1><div align="center">HLS With NetFPGA-SUME<br>Week 1</div></h1>
<br><h3>Members</h3>
<ul>
<li>Nguyen Ly Dang Khoa &raquo; 1952785</li>
<li>Nguyen Dinh Nam &raquo; 1952858</li>
</ul>
<h3>Table of content</h3>
<ul>
<li><a href="#download-xilinx-vivado-20182">Download Xilinx Vivado 2018.2</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#create-new-project-with-netfpga-sume-board">Create New Project With NetFPGA-SUME Board</a>
<br></li>
</ul>
<br>
<h1 id="download-xilinx-vivado-20182">Download Xilinx Vivado 2018.2</h1>
<ul>
<li>Download the Installer at <a target="_blank" href="https://www.xilinx.com/support/download.html">Xilinx Downloads site</a></li>
</ul>
<div align="center"><img src="https://lh3.googleusercontent.com/eo_2nibNQ2wweQDpIZnDLKmB6SCB6FkCBm--4kcj313BdS1_gMYUMzXmXvV7KGUDbowXlQZ2-4TDgTywhjlOlgonH6oKceTKFXXF4vuXjTJMThlrykg6xQhP2Ql4m7HsTHmkrqdBxA=w2400" width="93%"></div>
<ul>
<li>Register NetFPGA-SUME Beta Program at <a target="_blank" href="https://netfpga.org/NetFPGA-SUME.html">NetFPGA site</a></li>
</ul>
<div align="center"><img src="https://lh3.googleusercontent.com/0CeQn-Cwgnuyyfy2U7xKeRjme5QyhgMN_E4PabwOdOOwHqcThDMjlq4NIxwM2tbwAuHxVwvsmY-fblk7WTVtdp9HAp7twf8RFFXe-0qJaGk2O9WQnJVgoS2q3maskrxRx3JJhI7WNg=w2400" width="93%"></div>
<br>
<h1 id="installation">Installation</h1>
<ul>
<li>Open Download folder in Terminal on Linux and run these 2 commands</li>
</ul>
<pre><code>chmod +x Xilinx_Vivado_SDK_Web_2018.2_0614_1954_Lin64.bin
</code></pre>
<pre><code>sudo ./Xilinx_Vivado_SDK_Web_2018.2_0614_1954_Lin64.bin
</code></pre>
<div align="center"><img src="https://lh3.googleusercontent.com/35aZIwDuYaR7YFvhmtE17oixGTdAMwQGnCn4TsM5BCR31-QGNLPlAvZ9_5Yf4xRbjP0CdQujuQ1Kkkr6Y4o5iLq8oGxCL2JD_2akUC8-q2HHebplx4NDCAZKbSUXkvJwaxKyxZu_DA=w2400" width="93%"></div>
<ul>
<li>Login with Xilinx account, accept License Agreement and continue installing</li>
</ul>
<div align="center"><img src="https://lh3.googleusercontent.com/hdCrVa47pf2zV2yY_eDCvio2p3DKBH6_THlQ3zZnBt3qzdE6yl5cOy84XwBAzv6-EGVc7S9vywo0hM2nx-3NhcxK90vHiIws13m6TsY1xX2PJh7bR3kaPP8xaXijJTgpfZcx9RQtCw=w2400" width="93%"></div>
<ul>
<li>Wait until this Final Processing step starts, but it will be freezed intentionally. All you need to do is just click on <code>Cancel</code> but remember to select the option that <strong>keeps all downloaded files</strong>, so that you will resume the rest of the installation later</li>
</ul>
<div align="center"><img src="https://lh3.googleusercontent.com/pe1Vh8BbQFgef7sGxE0AvZrGA670MVLIZBOFKoQ2OlGlMnvlW8jVLZTSkZKCErFCS7j-KZCWwFZW1_m2pzFGLjAmFwRjtM87C4w2ayubrtDVHr7NsTZRNPbt_o8EdjkyCvjU8LE2YQ=w2400" width="93%"></div>
<ul>
<li>In Terminal, run this command</li>
</ul>
<pre><code>sudo apt-get install libncurses5
</code></pre>
<ul>
<li>After that, resume the installation with this previous command</li>
</ul>
<pre><code>sudo ./Xilinx_Vivado_SDK_Web_2018.2_0614_1954_Lin64.bin
</code></pre>
<ul>
<li>After the download completes, save the Certificate-Based License (.html file) and open it</li>
</ul>
<div align="center"><img src="https://lh3.googleusercontent.com/vO2l4xMdeNCh1GdToAigvbqI63f87SNbFmJfmOLJEHBepB4qppF_50W1NPJf_7TzTslnki6Kk1EPNRpuLQFNmLx04qCuhGtUuWYveSk1XpD6UsoWDJIPIBowoPk6lBbrdSN0SY9mDA=w2400" width="93%"><img src="https://lh3.googleusercontent.com/YW83N8bvzQp2ouBUkirbhZldJTdxyC6cuX2gB6c_AJZ8QIzAXtMdhAzyiBzNS7TS2XqGKezFviQzN2g6kgxIFg8AqoTHaWDFnyTR82OMZucBD5QEJyVCIf7h9iFCmuoS-wXxS3oRow=w2400" width="93%"><img src="https://lh3.googleusercontent.com/3s8LFn17uq68pv3vLyyKk0AmZbRQYKlaOEeiB2AIQwKFAWU3WbUoOzFDttYPR3NnacVLqiZofGpkl105aKPFg_Y7CghZT-Kkl6_lyexEe9GQDSee6kx8-0OQSGLqayo4bzsnu-UQrw=w2400" width="93%"></div>
<ul>
<li>Download the License file, then go back to the Vivado License Manager, click on <code>Load License</code> and select the file just downloaded</li>
<li>Open Terminal at path <code>Xilinx/Vivado/2018.2</code> (normally at <code>/opt/</code>. If not, find the destination folder which contains <code>Xilinx/Vivado/2018.2</code> and replace <code>opt</code> part in the next command with the name of that folder) and run this commmand</li>
</ul>
<pre><code>source /opt/Xilinx/Vivado/2018.2/settings64.sh
</code></pre>
<p>and the software is downloaded. To open it, run this command</p>
<pre><code>vivado_hls
</code></pre>
<br>
<h1 id="create-new-project-with-netfpga-sume-board">Create New Project with NetFPGA-SUME Board</h1>
<div align="center"><img src="https://lh3.googleusercontent.com/pXKCNGCtNc1OSvY3nWcJqO3rXXQol1EBgiSXHAUXpDCPHF8mkMh54NTAT97C4YrfgSET0uMuoreYWUxAGPGkEOdH-EhJESS5VxxaXLwvelBw9uYV1PSstTww1MAbqUBPfO1vXhY4qA=w2400" height="360px"> <img src="https://lh3.googleusercontent.com/i8G-ay-lhnenpIE_USFQoTosyh9zGmxbytn_wLloTluh39x2HwUB0yrlWJszdK7ELUpJF4rI3C_H4mCO0fMNnGBY-kpVvNl3UUEYHyiZYOjjuJ7dFUzm9WuvrCWR_bMNc4G_tebcZw=w2400" height="360px"> <img src="https://lh3.googleusercontent.com/Il-2KkybAxCXu689O0qbR_MLKEEYUOacsHYxTANguwvr6f5NnDNKpf0VobValMYJ347s4GUngI13X8ofTuSlY5S-xg9ZuR21lzsb9bd4PuXRsiI0Rv6hQB8r2DKVMvLnuGa-R9D3ZA=w2400" height="360px"> <img src="https://lh3.googleusercontent.com/fFmSM7nam4uJ4pTsuxxfl6xtHfvPQn5pCtuZkocCsla7WuTclxu0ZVSJhunlTW-wGX3xt58WmoYC32f4tfGHj4T6FEPAW2aOQobmBeklxpuxUYtXqHohtTna12k8--StL4_8APW-mA=w2400" height="360px"></div>
<ul>
<li>After having a specific cpp source file and a cpp testbench file, click the <code>Run C Simulation</code> button</li>
<li>In this step you might get errors like this</li>
</ul>
<blockquote>
<ol>
<li>INFO: [SIM 2] *************** CSIM start ***************</li>
<li>INFO: [SIM 4] CSIM will launch GCC as the compiler.</li>
<li>ERR: [SIM 100] CSim failed with errors.</li>
<li>INFO: [SIM 3] *************** CSIM finish ***************</li>
</ol>
</blockquote>
<p>and the console tab shows something like this</p>
<pre><code>"source /.../solution1/csim.tcl"
    invoked from within
"hls::main /.../solution1/csim.tcl"
    ("uplevel" body line 1)
    invoked from within
"uplevel 1 hls::main {*}$args"
    (procedure "hls_proc" line 5)
    invoked from within
"hls_proc $argv"
Finished C simulation.
</code></pre>
<ul>
<li>To fix this, open Terminal and run this command</li>
</ul>
<pre><code>export LIBRARY_PATH=/usr/lib/x86_64-linux-gnu:$LIBRARY_PATH
</code></pre>
<ul>
<li>Open Vivado HLS again and everything is good to be simulated and synthesized</li>
</ul>`;

var content2=`<h3><div align="center"><img class="brand" src="https://www.sarsen.net/uploads/files/images/Intel%20FPGA%20Logo.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://user-images.githubusercontent.com/48672827/57464068-a2a35580-72ae-11e9-9d52-7cadbf0cb940.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" height="35px"><br>Ho Chi Minh University of Technology</div></h3>
<br><h1><div align="center">HLS With NetFPGA-SUME<br>Week 2</div></h1>
<br><h3>Members</h3>
<ul>
<li>Nguyen Ly Dang Khoa &raquo; 1952785</li>
<li>Nguyen Dinh Nam &raquo; 1952858</li>
</ul>
<h3>Table of content</h3>
<ul>
<li><a href="#axi-stream">AXI Stream</a></li>
<li><a href="#tcpip">TCP/IP</a></li>
<li><a href="#ethernet">Transmitting over Ethernet</a></li>
<li><a href="#switch">How the Switch works</a>
<br></li>
</ul>
<br>
<h1 id="axi-stream">AXI Stream</h1>
<p>The AXI Stream protocol is used as a standard interface to exchange data between connected components. AXI Stream is a point-to-point protocol, connecting a single Transmitter and a single Receiver.</p>
<h2>Packets</h2>
<p>Packets are a group of bytes that are transported together across an AXI Stream interface. A packet can consist of a single transfer or multiple transfers. Interconnected components can use packets to deal more efficiently with a stream in packet-sized groups. A packet is similar to an AXI burst.</p>
<h3>Some data stream forms that AXI Stream uses</h3>
<ul>
<li><strong>Byte stream</strong>: transmitting data bytes and null bytes</li>
<li><strong>Continuous aligned stream (CAS)</strong>: transmitting data bytes</li>
<li><strong>Continuous unaligned stream (CUS)</strong>: no position bytes between the first data byte and the last data byte of each packets</li>
<li><strong>Sparse stream</strong>: transmitting data bytes and position bytes, most of them are data bytes, the position in packets are fixed</li>
</ul>
<h2>Signals in AXI Stream</h2>
<div align="center">
<b>Common signals in AXI Stream</b>
<table>
<thead>
<tr>
<th>Signal</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="#handshake-signaling-between-tvalid-and-tready">TVALID</a></td>
<td>Required, source from Transmitter</td>
</tr>
<tr>
<td><a href="#handshake-signaling-between-tvalid-and-tready">TREADY</a></td>
<td>Optional but highly recommended, source from Receiver to accept transfer</td>
</tr>
<tr>
<td><a href="#byte-location">TDATA</a></td>
<td>Provide data that is passing across the interface, source from Transmitter</td>
</tr>
<tr>
<td><a href="#byte-qualifiers">TKEEP, TSTRB</a></td>
<td>Byte qualifier for data in TDATA</td>
</tr>
<tr>
<td><a href="#boundariy-of-packets">TLAST</a></td>
<td>Boundary of a packet, source from Transmitter</td>
</tr>
<tr>
<td><a href="#source-and-destination-signaling">TID</a></td>
<td>Stream identifier, source from Transmitter</td>
</tr>
<tr>
<td><a href="#source-and-destination-signaling">TDEST</a></td>
<td>Provide routing info</td>
</tr>
<tr>
<td><a href="#user-signaling">TUSER</a></td>
<td>Any sideband user-defined data along with data stream</td>
</tr>
<tr>
<td><a href="#clock-and-reset">ACLK</a></td>
<td>Global clock signal, active HIGH</td>
</tr>
<tr>
<td><a href="#clock-and-reset">ARESETn</a></td>
<td>Global reset signal</td>
</tr>
</tbody>
</table>
</div>
<p><i>A transfer takes place when <b>both TVALID and TREADY are asserted</b>.</i></p>
<h3 id="handshake-signaling-between-tvalid-and-tready">Handshake signaling between TVALID and TREADY</h3>
<p>A two-way flow control mechanism enables Transmitter and Receiver to control the rate at which the data and control information is transmitted across the interface.</p>
<h3 id="byte-location">Byte location</h3>
<p><em>Given</em> <code>w</code> <em>is the width of data bus</em></p>
<ul>
<li>Byte <code>n</code> is in transfer <code>t</code>: <code>t = INT(n/w) = floor(n/w)</code></li>
<li>Position <code>b</code> of <code>n</code>: <code>b = n-(t*w)</code></li>
<li>Location in <code>TDATA</code>: <code>TDATA[(8b+7):8b]</code></li>
</ul>
<h3>Adaptation</h3>
<p>An adaptable data width can be configured to match the system in which a component is integrated (merged, packed, downsizing or upsizing).</p>
<h3 id="byte-qualifiers">Byte qualifiers</h3>
<!-- - TKEEP: When TKEEP is asserted, it indicates that the associated byte must be transmitted to the destination. When TKEEP is deasserted, it indicates a null byte that can be removed from the stream. A transfer is permitted with all TKEEP bits deasserted.
- TSTRB: When TSTRB is asserted, it indicates that the associated byte contains valid information and is a data byte. When TSTRB is deasserted, it indicates that the associated byte does not contain valid information and is a position byte.
 -->
<p><code>TKEEP[x]</code> is associated with <code>TDATA[(8x+7):8x]</code></p>
<p><code>TSTRB[x]</code> is associated with <code>TDATA[(8x+7):8x]</code></p>
<div align="center">
<b>TKEEP and TSTRB byte qualications</b>
<table>
<thead>
<tr>
<th>TKEEP</th>
<th>TSTRB</th>
<th>Data Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>HIGH</td>
<td>HIGH</td>
<td>Data byte</td>
<td>The associated byte contains valid information that must be transmitted between source and destination</td>
</tr>
<tr>
<td>HIGH</td>
<td>LOW</td>
<td>Position byte</td>
<td>The associated byte indicates the relative position of the data bytes in a stream, but does not contain any relevant data values</td>
</tr>
<tr>
<td>LOW</td>
<td>LOW</td>
<td>Null byte</td>
<td>The associated byte does not contain information and can be removed from the stream</td>
</tr>
<tr>
<td>LOW</td>
<td>HIGH</td>
<td>Reserved</td>
<td>Must not be used</td>
</tr>
</tbody>
</table>
</div>
<h3 id="boundariy-of-packets">Boundariy of Packets</h3>
<p>When asserted, TLAST indicates packet boundary or an efficient point to make an arbitration change on a shared link. When deasserted, TLAST indicates that another transfer can follow. This means it is acceptable to delay the current transfer for the purpose of upsizing, downsizing, or merging.<br>
The start of a packet is determined as:</p>
<ul>
<li>The first occurrence of a TID and TDEST pair after reset</li>
<li>The first transfer after the end of the preceding packet for any unique set of TID and TDEST values
In case lack of data or position bytes, TLAST is used to Indicate the end of a packet when there are no more data or position bytes to transmit; The transfer can be merged with earlier one if both have same TID and TDEST or if earlier transfer have TLAST deasserted.</li>
</ul>
<h3 id="source-and-destination-signaling">Source and destination signaling</h3>
<p>TID Provides a stream identifier that can be used to differentiate between multiple streams of data that are being transferred across the same interface.<br>
TDEST Provides coarse routing information for the data stream.<br>
Transfers that have the same TID and TDEST values are from the same stream. Merging of transfers belonging to different streams is not permitted.</p>
<h3 id="user-signaling">User signaling</h3>
<p>Sideband signaling can be used for data byte-based, transfer-based, packet-based, or frame-based information.<br>
Specific uses:</p>
<ul>
<li>Marking the location or type of special data items</li>
<li>Providing ancillary information that must accompany the data, such as control signals, and flags</li>
<li>Identifying segments of a packet</li>
</ul>
<p><em>Given</em> <code>w</code> <em>is the width of the interface</em>, <code>m</code> <em>is number of User signals,</em> <code>u</code> <em>is number of User bits</em> <code>(u = m*w)</code>, <code>x = 0 -&gt; w-1</code></p>
<ul>
<li>The location of the User signals for byte x: <code>TUSER[((x*m)+(m-1)):(x*m)]</code></li>
</ul>
<p>The transfer of TUSER bits is not required or guaranteed when the associated TKEEP is deasserted LOW.</p>
<h3 id="clock-and-reset">Clock and Reset</h3>
<p>A single clock signal, ACLK, is used by each component. Input signals are sampled on the rising edge and output signal changes must occur after the rising edge of ACLK.<br>
ARESETn is a single, active-LOW reset signal. The reset signal can be asserted asynchronously, but deassertion must be synchronous after the rising edge of ACLK.<br>
A Transmitter interface must only begin driving TVALID at a first rising ACLK edge after a rising edge at which ARESETn is asserted HIGH.</p>
<h2>Compatibility</h2>
<p><strong>Transmitter compatibility:</strong> The data width of the interfaces must be the same for a Transmitter and Receiver interface to be compatible. Any Transmitter component that supports TREADY can be made interface compatible with any Receiver component that supports the full feature set.<br>
<strong>Receiver compatibility:</strong></p>
<ul>
<li>Data width of the two interfaces must be the same</li>
<li>Receivers are not required to support null or position bytes</li>
</ul>
<p><strong>Interconnect compatibility:</strong> The interconnect is required to reliably transport all data bytes and position bytes from the Transmitter to the Receiver.</p>
<p><strong>Continuous packets:</strong></p>
<ul>
<li><strong>True</strong> Only continuous packets are supported
<ul>
<li>Transfer interleaving for different packets must not occur. This means that when TLAST is LOW, TID and TDEST must not change in the next transfer</li>
<li>TSTRB is not present. Position bytes are not supported</li>
<li>There must not be null bytes within a packet. This means:
<ul>
<li>If TLAST is LOW, all bits of TKEEP must be HIGH.</li>
<li>If TLAST is HIGH, null bytes are only permitted in the bytes above all the data bytes</li>
</ul>
</li>
</ul>
</li>
<li><strong>False</strong> Packets are not constrained to be continuous. If Continuous_Packets is not declared, it is considered to be False</li>
</ul>
<h2>Transfer Interleaving and Ordering</h2>
<h3>Transfer interleaving:</h3>
<p>It’s the process of interleaving transfers from different streams on a transfer-by-transfer basis. A Transmitter can interleave streams at source and an interconnect can interleave streams from multiple Transmitters at a point of convergence. Receivers can be designed to accept any number of interleaved streams or a limited number of interleaved streams.<br>
A Receiver, with the Continuous_Packets property set to True, <strong>cannot</strong> accept interleaved streams.<br>
One of the following techniques must be used to ensure a Receiver capabilities are not exceeded:</p>
<ul>
<li>The Receiver can be accessed by just one Transmitter, which must not exceed the interleaving capability of the Receiver</li>
<li>The Receiver is accessed by multiple Transmitters, each of which does not interleave packets</li>
<li>The Receiver is accessed by multiple Transmitters and a higher-level control mechanism ensures that the overall interleaving capability of the Receiver is not exceeded</li>
</ul>
<h3>Transfer ordering:</h3>
<ul>
<li>The AXI-Stream protocol requires that all transfers remain ordered. The reordering of transfers is not permitted</li>
<li>The stream interleaving observed by a Receiver is not increased.</li>
<li>The overall predictability of the system is improved</li>
<li>A given transfer can be determined, independent of the TID of the transfers, to reach a destination by observing that a later transfer from the same Transmitter has reached the same destination</li>
<li>The complexity of a system is reduced</li>
</ul>
<h2>Interface parity protection</h2>
<p>An error in a system component can propagate and cause numerous errors across connected components. Error Detection and Correction (EDC) is required to operate end-to-end, covering all logic and wires from source to destination</p>
<div align="center"><b>Schematic for EDC</b><br><img src="https://lh3.googleusercontent.com/AXlwP_2BaUIrRHxYX8G7KN4rZQRDjatlxdzG30OR0jp94sgBLri3cT6QGBVanGK53OFLx20eIz3n23ypWx7t-2rl_zkdYzCcmRqO3WRDZE_Y_y4gJZOat2_eOnIhgwuTSACcmnCVpQ=w2400" width="700px"></div>
<br>
<div align="center"><b>Parity checking signals</b><br><img src="https://lh3.googleusercontent.com/xI4vo90jtRrO4OtyfR5B8iqlnhC5TWbPG-Bn7fT4CSEICAUxmmVpx8ipa1aYPB3hP6YOrvfMzDFsRIMV_ycoSalIzLC4l_DynAiR2fxtF7FbVTy2ok2p5E6o9P5V5ks8_bNR-fK5mA=w2400" width="550px"></div>
<br>
<h1 id="tcpip">Transmission Control Protocol/Internet Protocol (TCP/IP)</h1>
<h2>TCP Header and IP Header</h2>
<p>TCP is a protocol of data transmission on the ethernet network so that the transmitted data must reach the destination stably.
TCP is stored in the data field of the ethernet frame starting from the TCP header until the end of the TCP pay load as shown below:</p>
<div align="center"><b>Ethernet Frame</b><br><img src="https://www.gatevidyalay.com/wp-content/uploads/2018/10/Ethernet-Important-Concept.png" width="550px"></div>
<div align="center"><b>TCP Header</b><br><img src="https://www.gatevidyalay.com/wp-content/uploads/2018/09/TCP-Header-Format.png" width="550px"></div>
<p>In case transmitting through LLC, additional information about the IP address contained in the IP header is required with the following format:</p>
<div align="center"><b>IP Header</b><br><img src="http://iot47.com/wp-content/uploads/2020/04/IPv4-Header-1.png" width="550px"></div>
<h2>TCP Handshake</h2>
<p>Here's how to establish a transfer between two devices on a TCP platform:</p>
<div align="center"><b>TCP Handshake</b><br><img src="https://ars.els-cdn.com/content/image/3-s2.0-B0122272404001878-gr10.gif" width="550px"></div>
<p>The transmitting device first transmits a TCP header with a syn flag value of <code>1</code> to signal synchronization between the transmitting device and the receiving device, and sends a value of <code>x</code> in the sequence number field of the TCP header.<br>
After receiving the signal from the transmitting device, the receiving device will respond by retransmitting a TCP header with the value of the ack flag 1 to acknowledge receipt of the incoming signal, and the acknowledgment number will be <code>x+1</code>. The syn flag bit will also be <code>1</code> to request a reverse synchronization with the transmitting device, the sequence number field will be a <code>y</code> value.<br>
After receiving a response from the receiving device, the sending device sends back a signal with the ack flag of <code>1</code> and the acknowledgment number will be <code>y+1</code>.<br>
The transfer link then has been established and the two devices can transmit information.</p>
<h2>Full Duplex</h2>
<p>The term&nbsp;full duplex&nbsp;describes simultaneous data transmission and receptions over one channel. In full-duplex mode, both stations can transmit and receive simultaneously. In full duplex mode, signals going in one direction share the capacity of the link with signals going in another direction, this sharing can occur in two ways:</p>
<ul>
<li>Either the link must contain two physically separate transmission paths, one for sending and the other for receiving</li>
<li>Or the capacity is divided between signals travelling in both directions
<br></li>
</ul>
<div align="center"><b>Half duplex vs Full duplex</b><br><img src="https://www.tech-faq.com/wp-content/uploads/2012/04/Half-Duplex-and-Full-Duplex.jpg" width="450px"></div>
<p>In full duplex mode, Sender can send the data and also can receive the data simultaneously. Telephones are common examples of full-duplex devices. They allow both people to hear each other at the same time. In the computer world, most&nbsp;network&nbsp;protocols are duplex, enabling hardware devices to send data back and forth simultaneously. For example, two computers connected via an&nbsp;Ethernet&nbsp;cable can send and receive data at the same time. Wireless networks also support full-duplex communication. Additionally, modern&nbsp;I/O&nbsp;standards, such as&nbsp;USB&nbsp;and&nbsp;Thunderbolt, are full duplex.<br>
<br></p>
<h1 id="ethernet">Transmitting over Ethernet</h1>
<div align="center"><b>Ethernet Frame</b><br><img src="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Screenshots_2018/EN-ethernet-frame-structure4.jpg" width="700px"></div><br>
<ul>
<li><strong>At the transmitting device:</strong><br>
The transmitting device must know the MAC address of the receiving device and the information to be sent will be broken down into packets contained in the data field of the frame, the transmitting device will contain in the <strong>source.addr</strong> field, its MAC address and the <strong>dest.addr</strong> field and the MAC address of the receiving device, and send it.<br>
The frame will go through the Ethernet path to the receiving device, might go through the hub or switch devices on during the transfer.</li>
<li><strong>At the receiving device:</strong><br>
The receiving device will be signaled with incoming data by the preamble field at the beginning of the frame, after the preample field is finished, the receiving device can check whether the receiving address is compatible or not, if compatible the device will continue the steps of reading data and sending feedback to the receiving device according to the address in the <strong>source.addr</strong> field.<br>
The receiving device can also check whether the transmitted data is intact by calculating a certain value composed of the data elements and comparing that with the FCS field, if identical means the data transmission is intact, otherwise a resend request is sent to the transmitting device based on the MAC address in the <strong>dest.addr</strong> field.
<br></li>
</ul>
<h1 id="switch">How the Switch works</h1>
<p>The switch functions by remembering the MAC addresses coming from the connected port field, specifically as follows:</p>
<div align="center"><b>Switch</b><br><img src="http://www.homenethowto.com/wp-content/uploads/switch-mac-address-forwarding.jpg" width="550px"></div><br>
<ul>
<li>
<p>When starting to operate because there is no information about the devices connected to the ports, the switch acts like a hub, for example:
When device 1 transmits data to device 2, device 1 will collapse the information it needs to send in the frame and then forward it, when the frame arrives at the switch, the switch will read the <strong>dest.addr</strong> and <strong>source.addr</strong> fields of the frame, at this time the switch will broadcast the signal sent to all the remaining ports (because there is no information about <strong>dest.addr</strong>) and at the same time it remembers the MAC address of device 1, enter this address in the MAC address table.</p>
</li>
<li>
<p>The frame is only received by device 2 because it has a <strong>dest.addr</strong> field same as device 2's MAC address. When device 2 receives the signal and responds to device 1, it once again goes through the switch, switch again remembers device 2's MAC address and puts it in the MAC address table and transmits data only to the port that remembers device 1's MAC address.</p>
</li>
<li>
<p>The broad cast process will take place until the switch remembers all the MAC addresses of the devices corresponding to each port.
One thing to note is that the MAC address table has a limit, so if a device in a certain time does not communicate with other devices, its MAC address in the MAC address table will be deleted and replaced by the new address of another device.</p>
</li>
<li>
<p>The switch also has a filter mechanism, devices sharing the same port when communicating will not need to go through the switch, by remembering the address corresponding to each switch port can ignore that signal process.</p>
</li>
</ul>`;

var content3=`<h3><div align="center"><img class="brand" src="https://www.sarsen.net/uploads/files/images/Intel%20FPGA%20Logo.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://user-images.githubusercontent.com/48672827/57464068-a2a35580-72ae-11e9-9d52-7cadbf0cb940.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" height="35px"><br>Ho Chi Minh University of Technology</div></h3>
<br><h1><div align="center">HLS With NetFPGA-SUME<br>Week 3</div></h1>
<br><h3>Members</h3>
<ul>
<li>Nguyen Ly Dang Khoa &raquo; 1952785</li>
<li>Nguyen Dinh Nam &raquo; 1952858</li>
</ul>
<h3>Table of content</h3>
<ul>
<li><a href="#nfs-ref">NetFPGA-SUME Reference Learning Switch</a></li>
<li><a href="#proj">Contributed Project</a>
<br></li>
</ul>
<br>
<h1 id="nfs-ref">NetFPGA-SUME Reference Learning Switch</h1>

<h3 id="reference-wiki">Reference Wiki</h3>
<p>Go to <a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/">NetFPGA-SUME public</a> repo at NetFPGA GitHub Organization.</p>
<p>Click on <code>Wiki</code> tab and search for <a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/wiki/NetFPGA-SUME-Reference-Learning-Switch">NetFPGA-SUME Reference Learning Switch &#129109;</a>.</p>
<ul>
<li>NetFPGA-SUME Specific cores<ul>
<li><a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/wiki/Std.-Core:-10G-Ethernet-Interface">nf_10g_interface &#129109;</a></li>
<li><a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/wiki/RIFFA-DMA-Engine">DMA &#129109;</a></li>
<li><strong><a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/wiki/Std.-Core:-Output-Port-Lookup-(Learning-Switch)">switch_output_port_lookup &#129109;</a></strong></li>
<li><a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/wiki/Std.-Core:-Output-Queues">output_queues &#129109;</a></li>
<li><a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/wiki/Std.-Core:-Input-Arbiter">input_arbiter &#129109;</a></li>
</ul>
</li>
</ul>
<p><br></p>
<h1 id="proj">Contributed Project</h1>

<p>After registering for NetFPGA Beta Program in the <a target="_blank" href="https://github.com/NetFPGA-Project/HLS-NetFPGA-SUME/tree/Week-1#download-xilinx-vivado-20182">first stage</a>, your GitHub account will be invited to join NetFPGA GitHub Organization in a few days.</p>
<p>When you&#39;re a member the organization, go to the private repo <a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-live">NetFPGA-SUME live</a>.</p>
<ul>
<li>Click on <code>projects</code> &raquo; <code>reference_switch</code> &raquo; <code>hw</code> to see how the switch is constructed</li>
<li>Click on <code>lib</code> &raquo; <code>hw</code> &raquo; <code>std</code> &raquo; <code>cores</code> to read about the methods using in the program</li>
</ul>`;

var content4=`<h3><div align="center"><img class="brand" src="https://www.sarsen.net/uploads/files/images/Intel%20FPGA%20Logo.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://user-images.githubusercontent.com/48672827/57464068-a2a35580-72ae-11e9-9d52-7cadbf0cb940.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" height="35px"><br>Ho Chi Minh University of Technology</div></h3>
<br><h1><div align="center">HLS With NetFPGA-SUME<br>Week 4</div></h1>
<br><h3>Members</h3>
<ul>
<li>Nguyen Ly Dang Khoa &raquo; 1952785</li>
<li>Nguyen Dinh Nam &raquo; 1952858</li>
</ul>
<h3>Table of content</h3>
<ul>
<li><a href="#handshake_axi">Handshake in AXI Stream</a></li>
<li><a href="#pragma">Pragma HLS Interface</a>
<br></li>
</ul>
<br>
<h1 id="handshake_axi">Handshake in AXI Stream</h1>
<div align="center"><b>Five channels in AXI Stream</b><br><img src="https://i.ibb.co/hgGbRWB/channels.png" width="400px"></div>
<br>

<h3>VALID/READY Handshake</h3>
All 5 transaction channels (read and write <strong>address</strong>; read and write <strong>data</strong> and write <strong>response</strong>) use the same VALID/READY handshake process to transfer address, data, and control information.<br>

Handshake occurs as described in the steps below (in any channel):
<ul>
<li>The source generates the <strong>VALID</strong> signal to indicate when the address, data or control information is available</li>
<li>The destination generates the <strong>READY</strong> signal to indicate that it can accept the information</li>
<li>Transfer occurs only when both the <strong>VALID</strong> and <strong>READY</strong> signals are HIGH</li>
</ul>
<br>
<div align="center"><b>READY before VALID</b><br><img src="https://i.ibb.co/z5G6ddd/ready-before-valid.png" width="450px"></div>
<br>
<div align="center"><b>VALID before READY</b><br><img src="https://i.ibb.co/QDQ3v2j/valid-before-ready.png" width="450px"></div>
<br>
<div align="center"><b>READY with VALID</b><br><img src="https://i.ibb.co/nPjwLz1/valid-with-ready.png" width="450px"></div>
<br>

<h3>Channels' Dependencies</h3>
<br>
<div align="center"><b>Channels&#39; dependencies graph</b><br><img src="https://i.ibb.co/1XqJ2MP/Handshake-Dependencies.jpg" width="550px"></div>
<br>

<h1 id="pragma">Pragma HLS Interface</h1>

<h3 id="descriptions">Descriptions</h3>
<p>Go to <a target="_blank" href="https://www.xilinx.com/html_docs/xilinx2019_1/sdaccel_doc/hls-pragmas-okr1504034364623.html">HLS Pragmas</a> &raquo; <code>pragma HLS interface</code> for references.</p>
<p>In C-based design, all input and output operations are performed through formal function arguments. In a register transfer level (RTL) design, these same input and output operations must be performed through a port in the design interface and typically operate using a specific input/output (I/O) protocol. Further descriptions at <a target="_blank" href="https://www.xilinx.com/support/documentation/sw_manuals/xilinx2019_1/ug902-vivado-high-level-synthesis.pdf">Vivado Design Suite User Guide: High-Level Synthesis</a> &raquo; <code>Managing Interfaces</code>.</p>
<br>
<h3 id="syntax">Syntax</h3>
<pre><code><span class="hljs-meta">#<span class="hljs-meta-keyword">pragma</span> HLS interface <span class="hljs-meta-string">&lt;mode&gt;</span> port=<span class="hljs-meta-string">&lt;name&gt;</span> bundle=<span class="hljs-meta-string">&lt;string&gt;</span></span>
<span class="hljs-keyword">register</span> register_mode=&lt;mode&gt; depth=&lt;<span class="hljs-keyword">int</span>&gt; offset=&lt;<span class="hljs-built_in">string</span>&gt;
clock=&lt;<span class="hljs-built_in">string</span>&gt; name=&lt;<span class="hljs-built_in">string</span>&gt;
num_read_outstanding=&lt;<span class="hljs-keyword">int</span>&gt; num_write_outstanding=&lt;<span class="hljs-keyword">int</span>&gt;
max_read_burst_length=&lt;<span class="hljs-keyword">int</span>&gt; max_write_burst_length=&lt;<span class="hljs-keyword">int</span>&gt;
</code></pre>
<br>
<h3 id="simple-alu-example-implementation-for-hls-">Simple ALU example implementation for HLS:</h3>
<div align="center"><b>core.cpp</b></div>

<pre><code><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;ap_int.h&gt;</span></span>

ap_uint&lt;<span class="hljs-number">20</span>&gt; simpleALU(ap_uint&lt;<span class="hljs-number">20</span>&gt; ina, ap_uint&lt;<span class="hljs-number">20</span>&gt; inb, ap_uint&lt;<span class="hljs-number">1</span>&gt; op){
<span class="hljs-meta">#<span class="hljs-meta-keyword">pragma</span> HLS INTERFACE s_axilite port=return</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">pragma</span> HLS INTERFACE s_axilite port=ina</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">pragma</span> HLS INTERFACE s_axilite port=inb</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">pragma</span> HLS INTERFACE s_axilite port=op</span>

    <span class="hljs-keyword">if</span>(op == <span class="hljs-number">1</span>){
        <span class="hljs-keyword">return</span> ina + inb<span class="hljs-comment">;</span>
    }
    <span class="hljs-keyword">return</span> ina - inb<span class="hljs-comment">;</span>
}
</code></pre><p><br></p>
<div align="center"><b>test.cpp</b></div>

<pre><code><span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;ap_int.h&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio.h&gt;</span></span>

ap_uint&lt;<span class="hljs-number">20</span>&gt; simpleALU(ap_uint&lt;<span class="hljs-number">20</span>&gt; ina, ap_uint&lt;<span class="hljs-number">20</span>&gt; inb, ap_uint&lt;<span class="hljs-number">1</span>&gt; op);

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span></span>{
    ap_uint&lt;<span class="hljs-number">20</span>&gt; ina= <span class="hljs-number">10</span>;
    ap_uint&lt;<span class="hljs-number">20</span>&gt; inb= <span class="hljs-number">9</span>;

    <span class="hljs-built_in">printf</span>(<span class="hljs-string">"Reference"</span>);
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">"SUM inb + ina = %d"</span>, (<span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">int</span>)ina  + (<span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">int</span>)inb);
	<span class="hljs-built_in">printf</span>(<span class="hljs-string">"SUB ina - inb = %d"</span>, (<span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">int</span>)ina - (<span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">int</span>)inb);

    ap_uint&lt;<span class="hljs-number">20</span>&gt; result1 = simpleALU(ina,inb,<span class="hljs-number">1</span>);
    ap_uint&lt;<span class="hljs-number">20</span>&gt; result2 = simpleALU(ina,inb,<span class="hljs-number">0</span>);

    <span class="hljs-built_in">printf</span>(<span class="hljs-string">"From simpleALU"</span>);
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">"SUM inb + ina = %d"</span>, (<span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">int</span>)result1);
    <span class="hljs-built_in">printf</span>(<span class="hljs-string">"SUB ina - inb = %d"</span>, (<span class="hljs-keyword">unsigned</span> <span class="hljs-keyword">int</span>)result2);
}
</code></pre><p><br></p>
<div align="center"><b>Waveform</b><br><img src="https://i.ibb.co/JHTVPHg/wave.png" width="650px"></div>`;

var content5=`<h3><div align="center"><img class="brand" src="https://www.sarsen.net/uploads/files/images/Intel%20FPGA%20Logo.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://user-images.githubusercontent.com/48672827/57464068-a2a35580-72ae-11e9-9d52-7cadbf0cb940.png" height="35px">&nbsp;&nbsp;<img class="brand" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" height="35px"><br>Ho Chi Minh University of Technology</div></h3>
<br><h1><div align="center">HLS With NetFPGA-SUME<br>Week 5</div></h1>
<br><h3>Members</h3>
<ul>
<li>Nguyen Ly Dang Khoa &raquo; 1952785</li>
<li>Nguyen Dinh Nam &raquo; 1952858</li>
</ul>
<h3>Table of content</h3>
<ul>
<li><a href="#10g_eth">10G Ethernet</a>
<br></li>
</ul>
<br>
<h1 id="10g_eth">10G Ethernet</h1>

<h3 id="description">Description</h3>
<p>Go to <a target="_blank" href="https://www.xilinx.com/support/documentation/ip_documentation/axi_10g_ethernet/v3_1/pg157-axi-10g-ethernet.pdf">10 Gigabit Ethernet 
Subsystem v3.1: Product Guide</a> &raquo; <code>Designing with the Subsystem</code> for more info.</p>
<p><a target="_blank" href="https://github.com/NetFPGA/NetFPGA-SUME-public/wiki/Std.-Core:-10G-Ethernet-Interface">Std. Core: 10G Ethernet Interface</a>.</p>
<h3 id="ethernet-data-format">Ethernet Data Format</h3>
<p><div align="center"><b>Standard Ethernet frame format</b><br><img src="https://i.ibb.co/6BH8xkR/eth-format.png" width="600px"></div>
<br>
The fields in the frame are transmitted 
from left to right. The bytes within the fields are transmitted from left to right (from least significant bit to most significant bit unless specified otherwise). The core can handle jumbo Ethernet frames where the data field can be much larger than 1,500 bytes.</p>
<h4 id="preamble-">Preamble:</h4>
<ul>
<li>For transmission, this field is automatically inserted by the core. The preamble field was historically used for synchronization and contains seven bytes with the pattern 0x55, transmitted from left to right.</li>
<li>For reception, this field is usually stripped from the incoming frame, before the data is passed to you. The exception to this is when the MAC is configured to operate in Custom Preamble mode, which allows some applications to use the time occupied by the preamble bytes to send network information around without overhead.</li>
</ul>
<h4 id="start-of-frame-delimiter-sfd-">Start of Frame Delimiter (SFD):</h4>
<ul>
<li>SFD field marks the start of the frame and must contain the pattern 0xD5. For transmission on the physical interface, this field is automatically inserted by the core. For reception, this field is always stripped from the incoming frame before the data is passed on.</li>
</ul>
<h4 id="mac-address-fields-">MAC Address Fields:</h4>
<ul>
<li><strong>MAC Address</strong>: The least significant bit of the first octet of a MAC address determines if the address is an individual/unicast or group/multicast address. Multicast addresses are used to group logically related stations. The broadcast address (destination address field is all 1s) is a multicast address that addresses all stations on the Local Area Network (LAN). The core supports transmission and reception of unicast, multicast, and broadcast packets.</li>
<li><strong>Destination Address</strong>: This MAC Address field is the first field of the Ethernet frame provided in the packet data for transmissions and is retained in the receive packet data.</li>
<li><strong>Source Address</strong>: This MAC Address field is the second field of the Ethernet frame provided in the packet data 
for transmissions and is retained in the receive packet data.</li>
</ul>
<h4 id="length-type-">Length/Type:</h4>
<ul>
<li>The value of this field determines if it is interpreted as a length or a type field.</li>
<li>For reception, if this field is a length field, the core receive engine interprets this value and removes any padding in the pad field (if necessary). If the field is a length field and length/type checking is enabled, the core compares the length against the actual data field length and flags an error if a mismatch occurs. If the field is a type field, the core ignores the value and passes it along with the packet data with no further processing. The length/type field is always retained in the receive packet data.</li>
</ul>
<h4 id="data-">Data:</h4>
<ul>
<li>The data field can vary from 0 to 1,500 bytes in length for a normal frame. The core can handle jumbo frames of any length.</li>
</ul>
<h4 id="pad-">Pad:</h4>
<ul>
<li>The pad field can vary from 0 to 46 bytes in length. This field is used to ensure that the frame length is at least 64 bytes in length (the preamble and SFD fields are not considered part of the frame for this calculation).</li>
<li>For transmission, this field can be inserted automatically by the core or can be supplied by you.</li>
<li>For reception, if the length/type field has a length interpretation, any pad field in the incoming frame is not passed to you, unless the core is configured to pass the FCS field on to you.</li>
</ul>
<h4 id="fcs-">FCS:</h4>
<ul>
<li>The value of the FCS field is calculated over the destination address, source address, length/type, data, and pad fields</li>
</ul>
<h3 id="frame-transmission-in-axi-stream">Frame Transmission in AXI Stream</h3>
<p><div align="center"><b>Frame Transmission - 32 bit</b><br><img src="https://i.ibb.co/HYzcxKf/frame-tx-32.png" width="650px"></div>
<br></p>
<p><div align="center"><b>Frame Transmission - 64 bit</b><br><img src="https://i.ibb.co/7RhkTym/frame-tx-64.png" width="650px"></div>
<br></p>
<ul>
<li>When the client wants to transmit a frame, it asserts the <code>s_axis_tx_tvalid</code> and places the data and control in <code>s_axis_tx_tdata</code> and <code>s_axis_tx_tkeep</code> in the same clock cycle.</li>
<li>When this data is accepted by the core, indicated by <code>s_axis_tx_tready</code> being asserted, the client must provide the next cycle of data.</li>
<li>If <code>s_axis_tx_tready</code> is not asserted by the core then the client must hold the current valid data value until it is. The end of packet is indicated to the core by <code>s_axis_tx_tlast</code> asserted for 1 cycle.</li>
<li>The bits of <code>s_axis_tx_tkeep</code> are set appropriately to indicate the number of valid bytes in the final data transfer.</li>
<li>After <code>s_axis_tx_tlast</code> is deasserted, any data and control is deemed invalid until <code>s_axis_tx_tvalid</code> is next asserted.</li>
</ul>
`;

document.getElementById('content').innerHTML = content;
