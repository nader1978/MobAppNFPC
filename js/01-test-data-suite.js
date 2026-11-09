/* ===== TEST MODE: demo data for the full mobile suite (js/79*) — every Power Apps screen has something to show ===== */
(function () {
// SharePoint stand-in data, keys normalized like the real reader (lower-case, no _)
const T = new Date().toISOString().slice(0,10), Y = new Date(Date.now()-864e5).toISOString().slice(0,10);
  const FX = {
 LoginUserList: [{id:1,username:'nader.alnajjar',linemngr:'ashraf',emailid:'nader@x.com',empid:'1001',accesslevel:5,locationid:'7',locationdesc:'Al Ain DC',region:'Al Ain'},{id:2,username:'ashraf',emailid:'ashraf@x.com',accesslevel:6},{id:3,username:'driver1',employeename:'Ali Driver',accesslevel:4,vmoperator:true,title:'Logistics Driver',locationid:'7',empid:'2001',lastactivtiydate:T},{id:4,username:'flo1',employeename:'Omar FLO',accesslevel:3,vmoperator:true,locationid:'7',empid:'3001'}],
 Forklift_Units_tbl: [{id:11,devicecode:'FL-07',devicebrand:'Toyota',devicemodel:'8FB',lastodo:1200,energytype:'ELECTRIC',chargingstatus:'Done',chrgmarkkwhs:4.5,startchargescrnlevel:0,locationid:'7'},{id:12,devicecode:'FL-09',devicebrand:'Linde',lastodo:800,energytype:'LPG',locationid:'7'}],
 Trls_Units_tbl: [{id:21,deviceplatenr:'U-5521',devicebrand:'Volvo',lastodoreading:150200,warehousestatus:'Released From WHs',locationid:'7'},{id:22,deviceplatenr:'U-6610',lastodoreading:90200,warehousestatus:'Arrived to WHs',tripid:'301',whsdesc:'Al Ain--ALN WHs',locationid:'7'}],
 Truck_List_tbl: [{id:31,platenr:'T-1001',nrofplts:24},{id:32,platenr:'T-1002',nrofplts:28}],
 FLOprt_CheckList_tbl: [{id:41,flcode:'FL-07',recordtype:'Receive Unit',approvedbysprvsr:'Yes',username:'nader.alnajjar',odoreading:1200,prvsodo:1150,totalkms:50,transdate:T,approvallnmngr:'nader.alnajjar'},{id:42,flcode:'FL-09',recordtype:'Park Unit',approvedbysprvsr:'Not Yet',username:'flo1',odoreading:800,prvsodo:790,totalkms:10,transdate:T,approvallnmngr:'nader.alnajjar'}],
 TrlsDrivers_CheckList_tbl: [{id:51,flcode:'U-5521',trailernr:'T-1001',recordtype:'Receive Unit',approvedbysprvsr:'Yes',username:'nader.alnajjar',odoreading:150200,transdate:T,approvallnmngr:'ashraf'},{id:52,flcode:'U-6610',trailernr:'T-1002',recordtype:'Receive Unit',approvedbysprvsr:'Not Yet',username:'driver1',odoreading:90200,prvsodo:90100,totalkms:100,transdate:T,approvallnmngr:'nader.alnajjar'}],
 Trls_Fuel_Usage_tbl: [{id:61,flcode:'U-5521',flodo:150000,nrofrefilledltrs:300,username:'nader.alnajjar',transdate:Y,totalkms:400}],
 FLO_LGV_Usage_tbl: [{id:71,flcode:'FL-07',flodo:1190,transdate:Y}],
 AppConfig_tbl: [{id:1,activeversion:true,trlsodomaxkm:400}],
 Trls_Daily_Activity_tbl: [{id:301,unitnr:'U-6610',trailernr:'T-1002',tripstatus:'Started',tasktype:'Start Trip',odoreading:90000,distnfrom:'Al Ain',loactionfrom:'Al Ain DC',distnto:'Dubai',locationto:'DXB WHs',nrofplts:22,dnnr:'DN-77',trlstasktype:'Dairy',username:'nader.alnajjar',transdate:T,starttimestamp:new Date(Date.now()-3*3600e3).toISOString()},{id:302,unitnr:'U-5521',trailernr:'T-1001',tripstatus:'Planned',odoreading:0,distnfrom:'Al Ain',loactionfrom:'Al Ain DC',distnto:'Abu Dhabi',locationto:'AUH WHs',nrofplts:20,dnnr:'',trlstasktype:'Juice',username:'nader.alnajjar',transdate:T}],
 Regions_tbl: [{id:1,regionname:'Al Ain'},{id:2,regionname:'Dubai'},{id:3,regionname:'Abu Dhabi'}],
 WHs_Logistics_tbl: [{id:1,whsregion:'Al Ain',whsdesc:'Al Ain DC',emaiids:'aln@x.com'},{id:2,whsregion:'Dubai',whsdesc:'DXB WHs',emaiids:'dxb@x.com'},{id:3,whsregion:'Abu Dhabi',whsdesc:'AUH WHs'}],
 Trls_Products_Ctgry_tbl: [{id:1,title:'Dairy'},{id:2,title:'Juice'}],
 Staff_Attendance_tbl: [],
 Inventory_Item_List: [{id:101,itemcode:'A-100',itemdtls:'Crate blue',itemctgry:'Asset',balqty:500,basicuom:'PC',totalrcvdqty:900,totalrlsdqty:400},{id:102,itemcode:'Q6922',itemdtls:'AQUA 330ml',itemctgry:'Oasis',itembarcode:'6291001',basicuom:'PC',nrdaysnearexpirypolicy:10,nrdayspostexpirypolicy:5}],
 Items_WHs_Location_tbl: [{id:201,whsdesc:'Al Ain region',qtybalance:200},{id:202,whsdesc:'Dubai region',qtybalance:100}],
 UOM_tbl: [{id:301,itemid:101,uomdesc:'Bundle',uombasenr:10}],
 Items_UOM_tbl: [{id:1,uomdesc:'Carton'},{id:2,uomdesc:'Pallet'}],
 Main_Inventory_Movements_tbl: [{id:401,itemcode:'A-100',itemdesc:'Crate blue',itemchngqty:50,itemrcvqty:50,transdate:T,whsid:'Al Ain region',recordid:'GRN-1'}],
 WHs_Temperature_Reading_tbl: [{id:501,whsdesc:'Chiller Store A',temperaturedegree:6.5,humidityreading:70,transdate:T,transtime:'08:00',readingby:'nader.alnajjar'}],
 WHs_Assigment_tbl: [{id:1,assignedstaff:'nader.alnajjar',whsdesc:'Chiller Store A',whsid:'7'}],
 Stores_Locations_tbl: [{id:1,storedesc:'Chiller Store A',strminitemp:5,minihumdtylevel:75,nrofdailytempreading:3,storecapacity:300,storetype:'Chiller',storagetemptype:'+4',rackingtype:'Selective',whsdesc:'Al Ain DC'}],
 Daily_Meeting_Report_Data_tbl: [{id:601,datamainsector:'8-WHs Capacity Status',secondsector:'Chiller Store A',thirdsector:'1-Capacity',totals:300,recorddate:T,whsdtls:'Al Ain DC',username:'nader.alnajjar'},{id:602,datamainsector:'8-WHs Capacity Status',secondsector:'Chiller Store A',thirdsector:'2-Actual',totals:255,recorddate:T,whsdtls:'Al Ain DC',username:'nader.alnajjar',transcreationtimestamp:new Date().toISOString()},{id:603,datamainsector:'8-WHs Capacity Status',secondsector:'Chiller Store A',thirdsector:'3-Free',totals:45,recorddate:T,whsdtls:'Al Ain DC'}],
 SKUs_Received_Batch_tbl: [{id:701,skuscode:'Q6922',skusdesc:'AQUA 330ml',batchcode:'Q30102027',proddate:'2026-10-30',expirydate:'2027-10-30',totalbalqtybase:420,locationid:'7'}],
 Returns_Expired_Items_tbl: [{id:1,itemcode:'Q6922',itemdesc:'AQUA 330ml',itemqty:6,uom:'PC',routecode:'R-12',drivername:'Ali',transdate:Y,typeofreturnpolicy:'Expired',complywithpolicy:'Yes',username:'nader.alnajjar'},{id:2,itemcode:'Q6922',itemdesc:'AQUA 330ml',itemqty:2,uom:'PC',routecode:'R-12',transdate:T,typeofreturnpolicy:'Damage',complywithpolicy:'N/A'}], Expired_Items_Receive_Header_tbl: [], Route_Details_tbl: [{id:1,routecode:'R-12',routedriver:'Ali'}],
 Store_Racks_Setup_tbl: [{id:801,rackcode:'R01-A01',locationdesc:'Rack row 1',areadesc:'Ambient',defaultcapacity:5,activestatus:true,locationid:'7'},{id:802,rackcode:'R01-A02',locationdesc:'Rack row 1',defaultcapacity:5,activestatus:true,locationid:'7'}],
 Store_Inspections_RowDtls_tbl: [{id:901,rackcode:'R01-A01',inspectionpurpose:'Stock Count',itemcode:'Q6922',itemdesc:'AQUA 330ml',batchcode:'Q30102027',actualutilization:4,transdate:T,username:'nader.alnajjar'}],
 Store_Inspection_Hdr_tbl: [],
 WH_Pick_Transit_tbl: [{id:1001,transitno:'TR-55',picktype:'FEFO',transitstatus:'To pick',rackcode:'R01-A01',palletpos:2,batchcode:'Q30102027',expirydate:'2027-10-30',skucode:'Q6922',skudesc:'AQUA 330ml',qty:40,uomdesc:'CTN',locationid:'7',destination:'DXB'}],
 RMPM_Pick_Tasks_tbl: [{id:1101,issueno:'ISS-9',taskstatus:'Open',location:'BIN-4',lotno:'L77',itemcode:'RM-1',itemname:'Caps',qtyrequired:500,uom:'PC',locationid:'7'}],
 RMPM_Movements_tbl: [{id:1201,locationbin:'BIN-4',itemcode:'RM-1',itemname:'Caps',lotno:'L77',quantityin:900,quantityout:0,uom:'PC',locationid:'7'}], RMPM_Items_tbl: [],
 Oasis_Prism_Upload_tbl: [{id:1301,pickinglistno:'PL-1',itemcode:'Q6922',itemdesc:'AQUA 330ml',loadedqty:100,uom:'CTN',batchno:'B1',ticketno:'TK1',routecode:'R-12',driverno:'55'}],
 Milco_Bulk_Release_Data_tbl: [{id:1401,pickinglistno:'MP-1',itemcode:'Q6922',skudesc:'AQUA',pickquantity:20,expirydate:'2027-10-30',proddate:'2026-10-30'}],
 GRV_Data_tbl: [{id:1501,pickinglistno:'G-1',skucode:'Q6922',skudesc:'AQUA',adjustedqtypcs:12}], FEFO_Bulk_Lacnor_Data_tbl: [{id:1601,pickinglistno:'F-1',skucode:'Q6922',skudesc:'AQUA',qtyallocated:30,batchcode:'Q30102027'}],
 Oasis_Truck_Returns_tbl: [], Oasis_Receive_Trucks_Hdr_tbl: [],
 WHs_tbl: [{id:7,whsdesc:'Al Ain DC',whsincharge:'nader.alnajjar',whsproductivtytrgt:900,whsotprcntg:0.1,helperscontribution:6,flocontribution:3,adminstaffcontribution:1}],
 Facilities_Dept_tbls: [{id:1,facilitiesdeptdtls:'Maintenance',deptemailid:'mnt@x.com'}], Facilities_Task_Ctgry_tbl: [{id:1,title:'Electrical'}], Facilities_Work_Scop_tbl: [{id:1,title:'Repair'}],
 WHs_Facilities_Rqrmnt_tbl: [{id:1701,visitedarea:'Al Ain DC',rspsbldept:'Maintenance',taskctgry:'Electrical',requirementsdtls:'Fix light in aisle 3',rqstcompletiondate:Y,inquirystatus:'New',rcrddate:Y,username:'nader.alnajjar',assignedto:'nader.alnajjar',headerid:1801}],
 Field_Visits_Observations_hdr_tbl: [{id:1801,visitedarea:'Al Ain DC',rcrddate:Y,inquirystatus:'New',postrcrd:true,username:'nader.alnajjar',assignedto:'nader.alnajjar'}],
 Employees_tbl: [{id:1901,filenr:'5001',employeename:'Ahmed Saleh',jobrole:'Helper',rolegrade:3,employmentstatus:'Active',linemanager:'nader.alnajjar',region:'Al Ain',section:'Dispatch',whslocation:'Al Ain DC',nationality:'EG',dateofjoin:'2020-01-01'}],
 Employees_RRF_History: [{id:1,filenrlink:'5001',actiontype:'On Leave',actiondate:Y,leavedays:14,jobrole:'Helper',actionremarks:'Annual leave'}], OT_Approval_Hdr_tbl: [], OT_Staff_List_Data_tbl: [{id:2001,staffname:'Ahmed Saleh',stafffilenr:'5001',staftitle:'Helper',otworkdate:Y,othours:8,stafflinemngr:'nader.alnajjar'}],
 Mngmnt_Daily_Data_tbl: [{id:2101,whsdesc:'Al Ain DC',entrydate:Y,normalworkinghours:400,normalovertimehours:40,weekoffot:10,inboundvolumeltrskg:200000,outboundvolumeltrskg:250000,nractualstaff:50,totalstaffbudget:55,whproductivitytrgt:900,username:'nader.alnajjar',verifiyingassignedto:'nader.alnajjar'}],
 Daily_Meeting_Report_MainCtgry_tbl: [{id:1,datamainsector:'1-Inbound'},{id:8,datamainsector:'8-WHs Capacity Status'}], Daily_Meeting_Report_2ndCtgry_tbl: [{id:1,mainctgryid:1,secounddatactgry:'Containers'}], Daily_Meeting_Report_3rdCtgry_tbl: [{id:1,linkmainctgry:1,thirdctgrydatadesc:'1-Received'},{id:2,linkmainctgry:1,thirdctgrydatadesc:'2-Pending'}],
 WS_Technicians_tbl: [{id:1,username:'nader.alnajjar',techname:'Nader T',role:'Team Leader',hourlyrate:30}],
 WS_Jobs_tbl: [{id:2201,jobno:'FS-1',jobtype:'Field',jobstatus:'Assigned',technician:'Nader T',assettag:'CL-889',assetdesc:'Cooler 2 doors',customeroutlet:'Lulu Al Ain',faultdescription:'Not cooling'},{id:2202,jobno:'WS-2',jobtype:'Workshop',jobstatus:'Estimated',assettag:'CL-100',esttotal:900,bookvalue:600}],
 WS_Van_Stock_tbl: [{id:2301,techname:'Nader T',partcode:'P-1',partname:'Fan motor',qtyonhand:3,unitcost:45}], WS_Part_Requests_tbl: [{id:2401,reqno:'PR-1',reqstatus:'Requested',technician:'Nader T',partcode:'P-1',partname:'Fan motor',qty:2}], WS_Job_Parts_tbl: [], WS_Spare_Parts_tbl: [{id:2501,partcode:'P-2',partname:'Thermostat',unitcost:20}],
 Tomorrow_Orders_tbl: [], Vehicles_Dtls_tbl: [{id:1,vehiclesplatenr:'V-123'}], Vehicle_Mngmnt_tbl: []
};
  /* lists the first test version already fills keep their data; the rest come from here */
  Object.entries(FX).forEach(([l, rows]) => { if (!DB[l] || !DB[l].length) DB[l] = rows; });
  /* updates change the demo rows, so approvals, trips and picks move on screen */
  const _u0 = updateItem; updateItem = async function (s, l, id, f) { const r = await _u0(s, l, id, f); const row = (DB[l] || []).find(x => x.id === id) || (DB[l] || [])[id - 1]; if (row) Object.assign(row, f); return r; };
  const _c0 = createItem; createItem = async function (s, l, f) { const r = await _c0(s, l, f); const a = DB[l]; if (a && a[a.length - 1] === f && r && r.id) f.id = r.id; return r; };
  window.mailSend_send = async m => { sectionToast('Test mode: e-mail to ' + m.to + ' not sent — "' + m.subject + '"', 'info'); };
})();
