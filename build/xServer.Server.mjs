// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Contract;
  
  const AddressView_ContractBalance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v692, v693, v694, v695, v696, v701] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v692, v693, v696, v738, v1356] = svs;
      return (await ((async () => {
        
        
        return v1356;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v692, v693, v696, v730, v737, v738, v749, v750] = svs;
      return (await ((async () => {
        
        
        return v750;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const AddressView_SeeAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v692, v693, v694, v695, v696, v701] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v692, v693, v696, v738, v1356] = svs;
      return (await ((async () => {
        
        
        return v693;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v692, v693, v696, v730, v737, v738, v749, v750] = svs;
      return (await ((async () => {
        
        
        return v693;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const AddressView_SetCompanion = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v692, v693, v694, v695, v696, v701] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v692, v693, v696, v738, v1356] = svs;
      return (await ((async () => {
        
        const v723 = await ctc.getContractCompanion();
        const v724 = await ctc.getContractInfo();
        const v725 = stdlib.fromSome(v723, v724);
        
        return v725;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v692, v693, v696, v730, v737, v738, v749, v750] = svs;
      return (await ((async () => {
        
        const v723 = await ctc.getContractCompanion();
        const v724 = await ctc.getContractInfo();
        const v725 = stdlib.fromSome(v723, v724);
        
        return v725;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      AddressView: {
        ContractBalance: {
          decode: AddressView_ContractBalance,
          dom: [],
          rng: ctc1
          },
        SeeAddress: {
          decode: AddressView_SeeAddress,
          dom: [],
          rng: ctc0
          },
        SetCompanion: {
          decode: AddressView_SetCompanion,
          dom: [],
          rng: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc5],
      3: [ctc0, ctc0, ctc2, ctc1, ctc1],
      5: [ctc0, ctc0, ctc2, ctc1, ctc5, ctc1, ctc4, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Tuple([ctc0]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc10 = stdlib.T_Digest;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc12 = stdlib.T_Struct([['AssetName', ctc8], ['AssetSymbol', ctc9], ['AssetType', ctc0], ['AssetValue', ctc0], ['OwnerAddress', ctc3], ['AdminAddress', ctc3], ['Hash', ctc10], ['Time', ctc0], ['ExtCID', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    AdminApi_deprecate0_88: ctc6,
    AdminApi_fundALGOS0_88: ctc7,
    AdminApi_fundJSR0_88: ctc7,
    UserApi_GetJASIRIS0_88: ctc13
    });
  const ctc15 = stdlib.T_Struct([['AssetName', ctc8], ['AssetSymbol', ctc9], ['AssetType', ctc0], ['AssetValue', ctc0], ['OwnerAddress', ctc3], ['AdminAddress', ctc3], ['Time', ctc0], ['ExtCID', ctc11]]);
  const ctc16 = stdlib.T_Tuple([ctc12, ctc0]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc0, ctc5]);
  const ctc19 = stdlib.T_Array(ctc18, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v675 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v676 = [v675];
  const v680 = ctc.selfAddress();
  const v682 = stdlib.protect(ctc2, await interact.tokenParams(), {
    at: './Server.rsh:41:67:application',
    fs: ['at ./Server.rsh:40:15:application call to [unknown function] (defined at: ./Server.rsh:40:19:function exp)'],
    msg: 'tokenParams',
    who: 'Admin'
    });
  const v683 = v682[stdlib.checkedBigNumberify('./Server.rsh:41:67:application', stdlib.UInt_max, '0')];
  const v684 = v682[stdlib.checkedBigNumberify('./Server.rsh:41:67:application', stdlib.UInt_max, '1')];
  const v685 = v682[stdlib.checkedBigNumberify('./Server.rsh:41:67:application', stdlib.UInt_max, '2')];
  const v689 = stdlib.gt(v683, stdlib.checkedBigNumberify('./Server.rsh:42:20:decimal', stdlib.UInt_max, '0'));
  const v690 = stdlib.gt(v684, stdlib.checkedBigNumberify('./Server.rsh:42:34:decimal', stdlib.UInt_max, '0'));
  const v691 = v689 ? v690 : false;
  stdlib.assert(v691, {
    at: './Server.rsh:42:11:application',
    fs: ['at ./Server.rsh:40:15:application call to [unknown function] (defined at: ./Server.rsh:40:19:function exp)'],
    msg: 'Please fund account',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v680, v683, v684, v685],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./Server.rsh:45:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc0, ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:45:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v693, v694, v695, v696], secs: v698, time: v697, didSend: v40, from: v692 } = txn1;
      
      const v699 = v676[stdlib.checkedBigNumberify('./Server.rsh:45:11:dot', stdlib.UInt_max, '0')];
      const v700 = stdlib.Array_set(v699, '0', stdlib.checkedBigNumberify('./Server.rsh:45:11:dot', stdlib.UInt_max, '0'));
      const v701 = stdlib.Array_set(v676, stdlib.checkedBigNumberify('./Server.rsh:45:11:dot', stdlib.UInt_max, '0'), v700);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v696
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v693, v694, v695, v696], secs: v698, time: v697, didSend: v40, from: v692 } = txn1;
  const v699 = v676[stdlib.checkedBigNumberify('./Server.rsh:45:11:dot', stdlib.UInt_max, '0')];
  const v700 = stdlib.Array_set(v699, '0', stdlib.checkedBigNumberify('./Server.rsh:45:11:dot', stdlib.UInt_max, '0'));
  const v701 = stdlib.Array_set(v676, stdlib.checkedBigNumberify('./Server.rsh:45:11:dot', stdlib.UInt_max, '0'), v700);
  ;
  ;
  const v703 = stdlib.gt(v694, stdlib.checkedBigNumberify('./Server.rsh:46:21:decimal', stdlib.UInt_max, '0'));
  const v704 = stdlib.gt(v695, stdlib.checkedBigNumberify('./Server.rsh:46:35:decimal', stdlib.UInt_max, '0'));
  const v705 = v703 ? v704 : false;
  stdlib.assert(v705, {
    at: './Server.rsh:46:12:application',
    fs: [],
    msg: 'Please fund account',
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v692, v693, v694, v695, v696, v701],
    evt_cnt: 0,
    funcNum: 1,
    lct: v697,
    onlyIf: true,
    out_tys: [],
    pay: [v694, [[v695, v696]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v710, time: v709, didSend: v58, from: v708 } = txn2;
      
      sim_r.txns.push({
        amt: v694,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v715 = v701[stdlib.checkedBigNumberify('./Server.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v716 = v715[stdlib.checkedBigNumberify('./Server.rsh:50:11:dot', stdlib.UInt_max, '0')];
      const v717 = stdlib.add(v716, v695);
      const v719 = stdlib.Array_set(v715, '0', v717);
      const v720 = stdlib.Array_set(v701, stdlib.checkedBigNumberify('./Server.rsh:50:11:dot', stdlib.UInt_max, '0'), v719);
      sim_r.txns.push({
        amt: v695,
        kind: 'to',
        tok: v696
        });
      const v726 = await ctc.getContractInfo();
      
      const v730 = stdlib.checkedBigNumberify('./Server.rsh:55:65:decimal', stdlib.UInt_max, '0');
      const v731 = v709;
      const v737 = v720;
      const v738 = v694;
      
      if (await (async () => {
        const v744 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
        const v745 = v744[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
        const v748 = stdlib.gt(v745, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
        
        return v748;})()) {
        const v749 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
        const v750 = v749[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v1355 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
        const v1356 = v1355[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc0, ctc0, ctc1, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v710, time: v709, didSend: v58, from: v708 } = txn2;
  ;
  const v715 = v701[stdlib.checkedBigNumberify('./Server.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v716 = v715[stdlib.checkedBigNumberify('./Server.rsh:50:11:dot', stdlib.UInt_max, '0')];
  const v717 = stdlib.add(v716, v695);
  const v719 = stdlib.Array_set(v715, '0', v717);
  const v720 = stdlib.Array_set(v701, stdlib.checkedBigNumberify('./Server.rsh:50:11:dot', stdlib.UInt_max, '0'), v719);
  ;
  const v721 = stdlib.addressEq(v692, v708);
  stdlib.assert(v721, {
    at: './Server.rsh:50:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v726 = await ctc.getContractInfo();
  stdlib.protect(ctc4, await interact.ready(v726), {
    at: './Server.rsh:54:25:application',
    fs: ['at ./Server.rsh:54:25:application call to [unknown function] (defined at: ./Server.rsh:54:25:function exp)', 'at ./Server.rsh:54:25:application call to "liftedInteract" (defined at: ./Server.rsh:54:25:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v730 = stdlib.checkedBigNumberify('./Server.rsh:55:65:decimal', stdlib.UInt_max, '0');
  let v731 = v709;
  let v737 = v720;
  let v738 = v694;
  
  let txn3 = txn2;
  while (await (async () => {
    const v744 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
    const v745 = v744[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
    const v748 = stdlib.gt(v745, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
    
    return v748;})()) {
    const v749 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
    const v750 = v749[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn4;
    switch (v848[0]) {
      case 'AdminApi_deprecate0_88': {
        const v851 = v848[1];
        undefined /* setApiDetails */;
        ;
        const v865 = stdlib.addressEq(v847, v693);
        stdlib.assert(v865, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:94:28:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:94:9:application call to [unknown function] (defined at: ./Server.rsh:94:9:function exp)'],
          msg: 'You are not the admin',
          who: 'Admin'
          });
        const v867 = true;
        await txn4.getOutput('AdminApi_deprecate', 'v867', ctc5, v867);
        const cv730 = v730;
        const cv731 = v849;
        const cv737 = v737;
        const cv738 = v738;
        
        v730 = cv730;
        v731 = cv731;
        v737 = cv737;
        v738 = cv738;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'AdminApi_fundALGOS0_88': {
        const v977 = v848[1];
        undefined /* setApiDetails */;
        ;
        const v1003 = stdlib.addressEq(v847, v693);
        stdlib.assert(v1003, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:82:28:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:82:9:application call to [unknown function] (defined at: ./Server.rsh:82:9:function exp)'],
          msg: 'You are not the admin',
          who: 'Admin'
          });
        const v1005 = true;
        await txn4.getOutput('AdminApi_fundALGOS', 'v1005', ctc5, v1005);
        const cv730 = v730;
        const cv731 = v849;
        const cv737 = v737;
        const cv738 = v738;
        
        v730 = cv730;
        v731 = cv731;
        v737 = cv737;
        v738 = cv738;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'AdminApi_fundJSR0_88': {
        const v1103 = v848[1];
        undefined /* setApiDetails */;
        ;
        const v1141 = stdlib.addressEq(v847, v693);
        stdlib.assert(v1141, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:88:28:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:88:9:application call to [unknown function] (defined at: ./Server.rsh:88:9:function exp)'],
          msg: 'You are not the admin',
          who: 'Admin'
          });
        const v1143 = true;
        await txn4.getOutput('AdminApi_fundJSR', 'v1143', ctc5, v1143);
        const cv730 = v730;
        const cv731 = v849;
        const cv737 = v737;
        const cv738 = v738;
        
        v730 = cv730;
        v731 = cv731;
        v737 = cv737;
        v738 = cv738;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'UserApi_GetJASIRIS0_88': {
        const v1229 = v848[1];
        undefined /* setApiDetails */;
        ;
        const v1278 = v1229[stdlib.checkedBigNumberify('./Server.rsh:97:11:spread', stdlib.UInt_max, '0')];
        const v1279 = v1278.AssetName;
        const v1280 = v1278.AssetSymbol;
        const v1281 = v1278.AssetType;
        const v1282 = v1278.AssetValue;
        const v1283 = v1278.OwnerAddress;
        const v1284 = v1278.AdminAddress;
        const v1285 = v1278.Hash;
        const v1286 = v1278.Time;
        const v1287 = v1278.ExtCID;
        const v1288 = {
          AdminAddress: v1284,
          AssetName: v1279,
          AssetSymbol: v1280,
          AssetType: v1281,
          AssetValue: v1282,
          ExtCID: v1287,
          OwnerAddress: v1283,
          Time: v1286
          };
        const v1289 = stdlib.digest([ctc15], [v1288]);
        const v1291 = stdlib.addressEq(v847, v1283);
        const v1292 = stdlib.digestEq(v1289, v1285);
        const v1293 = v1291 ? v1292 : false;
        const v1296 = stdlib.ge(v750, v1282);
        const v1297 = v1293 ? v1296 : false;
        stdlib.assert(v1297, {
          at: './Server.rsh:70:24:application',
          fs: ['at ./Server.rsh:101:30:application call to "poke" (defined at: ./Server.rsh:67:34:function exp)', 'at ./Server.rsh:100:7:application call to [unknown function] (defined at: ./Server.rsh:100:7:function exp)'],
          msg: 'You don\'t own this asset',
          who: 'Admin'
          });
        const v1298 = stdlib.safeMuldiv(v1282, stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:72:50:decimal', stdlib.UInt_max, '100'));
        const v1299 = stdlib.safeAdd(v1298, stdlib.checkedBigNumberify('./Server.rsh:73:31:decimal', stdlib.UInt_max, '1'));
        const v1300 = stdlib.lt(v1299, v1282);
        stdlib.assert(v1300, {
          at: './Server.rsh:73:24:application',
          fs: ['at ./Server.rsh:101:30:application call to "poke" (defined at: ./Server.rsh:67:34:function exp)', 'at ./Server.rsh:100:7:application call to [unknown function] (defined at: ./Server.rsh:100:7:function exp)'],
          msg: 'Not enough do',
          who: 'Admin'
          });
        const v1301 = stdlib.safeSub(v1282, v1298);
        const v1312 = stdlib.sub(v750, v1301);
        const v1314 = stdlib.Array_set(v749, '0', v1312);
        const v1315 = stdlib.Array_set(v737, stdlib.checkedBigNumberify('./Server.rsh:103:32:application', stdlib.UInt_max, '0'), v1314);
        ;
        const v1316 = v1315[stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0')];
        const v1317 = v1316[stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0')];
        const v1321 = stdlib.sub(v1317, v1298);
        const v1323 = stdlib.Array_set(v1316, '0', v1321);
        const v1324 = stdlib.Array_set(v1315, stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0'), v1323);
        ;
        const v1325 = [v1278, v1301];
        await txn4.getOutput('UserApi_GetJASIRIS', 'v1325', ctc16, v1325);
        const v1353 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./Server.rsh:106:39:decimal', stdlib.UInt_max, '1'));
        const cv730 = v1353;
        const cv731 = v849;
        const cv737 = v1324;
        const cv738 = v738;
        
        v730 = cv730;
        v731 = cv731;
        v737 = cv737;
        v738 = cv738;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v1355 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
  const v1356 = v1355[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc17],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1361], secs: v1363, time: v1362, didSend: v572, from: v1360 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v1364 = null;
  await txn4.getOutput('AnyApi_h', 'v1364', ctc4, v1364);
  ;
  ;
  return;
  
  
  
  
  
  
  };
export async function _AdminApi_deprecate5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminApi_deprecate5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminApi_deprecate5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc10 = stdlib.T_Digest;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc12 = stdlib.T_Struct([['AssetName', ctc8], ['AssetSymbol', ctc9], ['AssetType', ctc2], ['AssetValue', ctc2], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc10], ['Time', ctc2], ['ExtCID', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    AdminApi_deprecate0_88: ctc6,
    AdminApi_fundALGOS0_88: ctc7,
    AdminApi_fundJSR0_88: ctc7,
    UserApi_GetJASIRIS0_88: ctc13
    });
  const ctc15 = stdlib.T_Null;
  
  
  const [v692, v693, v696, v730, v737, v738, v749, v750] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2]);
  const v775 = ctc.selfAddress();
  const v777 = stdlib.protect(ctc6, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:92:9:application call to [unknown function] (defined at: ./Server.rsh:92:9:function exp)', 'at ./Server.rsh:55:60:application call to "runAdminApi_deprecate0_88" (defined at: ./Server.rsh:91:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'in',
    who: 'AdminApi_deprecate'
    });
  const v780 = stdlib.addressEq(v775, v693);
  stdlib.assert(v780, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:92:23:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:92:9:application call to [unknown function] (defined at: ./Server.rsh:92:14:function exp)', 'at ./Server.rsh:92:9:application call to [unknown function] (defined at: ./Server.rsh:92:9:function exp)', 'at ./Server.rsh:55:60:application call to "runAdminApi_deprecate0_88" (defined at: ./Server.rsh:91:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'You are not the admin',
    who: 'AdminApi_deprecate'
    });
  const v785 = ['AdminApi_deprecate0_88', v777];
  
  const txn1 = await (ctc.sendrecv({
    args: [v692, v693, v696, v730, v737, v738, v749, v750, v785],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:93:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
      
      switch (v848[0]) {
        case 'AdminApi_deprecate0_88': {
          const v851 = v848[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminApi_deprecate"
            });
          ;
          const v867 = true;
          const v868 = await txn1.getOutput('AdminApi_deprecate', 'v867', ctc3, v867);
          
          const v2024 = v730;
          const v2026 = v737;
          const v2027 = v738;
          const v2028 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2029 = v2028[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2030 = stdlib.gt(v2029, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
          if (v2030) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'AdminApi_fundALGOS0_88': {
          const v977 = v848[1];
          
          break;
          }
        case 'AdminApi_fundJSR0_88': {
          const v1103 = v848[1];
          
          break;
          }
        case 'UserApi_GetJASIRIS0_88': {
          const v1229 = v848[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
  switch (v848[0]) {
    case 'AdminApi_deprecate0_88': {
      const v851 = v848[1];
      undefined /* setApiDetails */;
      ;
      const v865 = stdlib.addressEq(v847, v693);
      stdlib.assert(v865, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:94:28:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:94:9:application call to [unknown function] (defined at: ./Server.rsh:94:9:function exp)'],
        msg: 'You are not the admin',
        who: 'AdminApi_deprecate'
        });
      const v867 = true;
      const v868 = await txn1.getOutput('AdminApi_deprecate', 'v867', ctc3, v867);
      if (v404) {
        stdlib.protect(ctc15, await interact.out(v851, v868), {
          at: './Server.rsh:91:12:application',
          fs: ['at ./Server.rsh:91:12:application call to [unknown function] (defined at: ./Server.rsh:91:12:function exp)', 'at ./Server.rsh:95:11:application call to "fn" (defined at: ./Server.rsh:94:9:function exp)', 'at ./Server.rsh:94:9:application call to [unknown function] (defined at: ./Server.rsh:94:9:function exp)'],
          msg: 'out',
          who: 'AdminApi_deprecate'
          });
        }
      else {
        }
      
      const v2024 = v730;
      const v2026 = v737;
      const v2027 = v738;
      const v2028 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2029 = v2028[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2030 = stdlib.gt(v2029, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
      if (v2030) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'AdminApi_fundALGOS0_88': {
      const v977 = v848[1];
      return;
      break;
      }
    case 'AdminApi_fundJSR0_88': {
      const v1103 = v848[1];
      return;
      break;
      }
    case 'UserApi_GetJASIRIS0_88': {
      const v1229 = v848[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminApi_fundALGOS5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminApi_fundALGOS5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminApi_fundALGOS5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc10 = stdlib.T_Digest;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc12 = stdlib.T_Struct([['AssetName', ctc8], ['AssetSymbol', ctc9], ['AssetType', ctc2], ['AssetValue', ctc2], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc10], ['Time', ctc2], ['ExtCID', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    AdminApi_deprecate0_88: ctc7,
    AdminApi_fundALGOS0_88: ctc6,
    AdminApi_fundJSR0_88: ctc6,
    UserApi_GetJASIRIS0_88: ctc13
    });
  const ctc15 = stdlib.T_Null;
  
  
  const [v692, v693, v696, v730, v737, v738, v749, v750] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2]);
  const v751 = ctc.selfAddress();
  const v753 = stdlib.protect(ctc6, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:80:9:application call to [unknown function] (defined at: ./Server.rsh:80:9:function exp)', 'at ./Server.rsh:55:60:application call to "runAdminApi_fundALGOS0_88" (defined at: ./Server.rsh:79:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'in',
    who: 'AdminApi_fundALGOS'
    });
  const v756 = stdlib.addressEq(v751, v693);
  stdlib.assert(v756, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:80:24:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:80:9:application call to [unknown function] (defined at: ./Server.rsh:80:14:function exp)', 'at ./Server.rsh:80:9:application call to [unknown function] (defined at: ./Server.rsh:80:9:function exp)', 'at ./Server.rsh:55:60:application call to "runAdminApi_fundALGOS0_88" (defined at: ./Server.rsh:79:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'You are not the admin',
    who: 'AdminApi_fundALGOS'
    });
  const v761 = ['AdminApi_fundALGOS0_88', v753];
  
  const txn1 = await (ctc.sendrecv({
    args: [v692, v693, v696, v730, v737, v738, v749, v750, v761],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:81:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
      
      switch (v848[0]) {
        case 'AdminApi_deprecate0_88': {
          const v851 = v848[1];
          
          break;
          }
        case 'AdminApi_fundALGOS0_88': {
          const v977 = v848[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminApi_fundALGOS"
            });
          ;
          const v1005 = true;
          const v1006 = await txn1.getOutput('AdminApi_fundALGOS', 'v1005', ctc3, v1005);
          
          const v2114 = v730;
          const v2116 = v737;
          const v2117 = v738;
          const v2118 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2119 = v2118[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2120 = stdlib.gt(v2119, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
          if (v2120) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'AdminApi_fundJSR0_88': {
          const v1103 = v848[1];
          
          break;
          }
        case 'UserApi_GetJASIRIS0_88': {
          const v1229 = v848[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
  switch (v848[0]) {
    case 'AdminApi_deprecate0_88': {
      const v851 = v848[1];
      return;
      break;
      }
    case 'AdminApi_fundALGOS0_88': {
      const v977 = v848[1];
      undefined /* setApiDetails */;
      ;
      const v1003 = stdlib.addressEq(v847, v693);
      stdlib.assert(v1003, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:82:28:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:82:9:application call to [unknown function] (defined at: ./Server.rsh:82:9:function exp)'],
        msg: 'You are not the admin',
        who: 'AdminApi_fundALGOS'
        });
      const v1005 = true;
      const v1006 = await txn1.getOutput('AdminApi_fundALGOS', 'v1005', ctc3, v1005);
      if (v404) {
        stdlib.protect(ctc15, await interact.out(v977, v1006), {
          at: './Server.rsh:79:12:application',
          fs: ['at ./Server.rsh:79:12:application call to [unknown function] (defined at: ./Server.rsh:79:12:function exp)', 'at ./Server.rsh:83:11:application call to "fn" (defined at: ./Server.rsh:82:9:function exp)', 'at ./Server.rsh:82:9:application call to [unknown function] (defined at: ./Server.rsh:82:9:function exp)'],
          msg: 'out',
          who: 'AdminApi_fundALGOS'
          });
        }
      else {
        }
      
      const v2114 = v730;
      const v2116 = v737;
      const v2117 = v738;
      const v2118 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2119 = v2118[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2120 = stdlib.gt(v2119, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
      if (v2120) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'AdminApi_fundJSR0_88': {
      const v1103 = v848[1];
      return;
      break;
      }
    case 'UserApi_GetJASIRIS0_88': {
      const v1229 = v848[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AdminApi_fundJSR5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminApi_fundJSR5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminApi_fundJSR5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc10 = stdlib.T_Digest;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc12 = stdlib.T_Struct([['AssetName', ctc8], ['AssetSymbol', ctc9], ['AssetType', ctc2], ['AssetValue', ctc2], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc10], ['Time', ctc2], ['ExtCID', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    AdminApi_deprecate0_88: ctc7,
    AdminApi_fundALGOS0_88: ctc6,
    AdminApi_fundJSR0_88: ctc6,
    UserApi_GetJASIRIS0_88: ctc13
    });
  const ctc15 = stdlib.T_Null;
  
  
  const [v692, v693, v696, v730, v737, v738, v749, v750] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2]);
  const v763 = ctc.selfAddress();
  const v765 = stdlib.protect(ctc6, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:86:9:application call to [unknown function] (defined at: ./Server.rsh:86:9:function exp)', 'at ./Server.rsh:55:60:application call to "runAdminApi_fundJSR0_88" (defined at: ./Server.rsh:85:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'in',
    who: 'AdminApi_fundJSR'
    });
  const v768 = stdlib.addressEq(v763, v693);
  stdlib.assert(v768, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:86:24:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:86:9:application call to [unknown function] (defined at: ./Server.rsh:86:14:function exp)', 'at ./Server.rsh:86:9:application call to [unknown function] (defined at: ./Server.rsh:86:9:function exp)', 'at ./Server.rsh:55:60:application call to "runAdminApi_fundJSR0_88" (defined at: ./Server.rsh:85:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'You are not the admin',
    who: 'AdminApi_fundJSR'
    });
  const v773 = ['AdminApi_fundJSR0_88', v765];
  
  const txn1 = await (ctc.sendrecv({
    args: [v692, v693, v696, v730, v737, v738, v749, v750, v773],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:87:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
      
      switch (v848[0]) {
        case 'AdminApi_deprecate0_88': {
          const v851 = v848[1];
          
          break;
          }
        case 'AdminApi_fundALGOS0_88': {
          const v977 = v848[1];
          
          break;
          }
        case 'AdminApi_fundJSR0_88': {
          const v1103 = v848[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminApi_fundJSR"
            });
          ;
          const v1143 = true;
          const v1144 = await txn1.getOutput('AdminApi_fundJSR', 'v1143', ctc3, v1143);
          
          const v2204 = v730;
          const v2206 = v737;
          const v2207 = v738;
          const v2208 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2209 = v2208[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2210 = stdlib.gt(v2209, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
          if (v2210) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'UserApi_GetJASIRIS0_88': {
          const v1229 = v848[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
  switch (v848[0]) {
    case 'AdminApi_deprecate0_88': {
      const v851 = v848[1];
      return;
      break;
      }
    case 'AdminApi_fundALGOS0_88': {
      const v977 = v848[1];
      return;
      break;
      }
    case 'AdminApi_fundJSR0_88': {
      const v1103 = v848[1];
      undefined /* setApiDetails */;
      ;
      const v1141 = stdlib.addressEq(v847, v693);
      stdlib.assert(v1141, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Server.rsh:58:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:88:28:application call to "isAdmin" (defined at: ./Server.rsh:58:35:function exp)', 'at ./Server.rsh:88:9:application call to [unknown function] (defined at: ./Server.rsh:88:9:function exp)'],
        msg: 'You are not the admin',
        who: 'AdminApi_fundJSR'
        });
      const v1143 = true;
      const v1144 = await txn1.getOutput('AdminApi_fundJSR', 'v1143', ctc3, v1143);
      if (v404) {
        stdlib.protect(ctc15, await interact.out(v1103, v1144), {
          at: './Server.rsh:85:12:application',
          fs: ['at ./Server.rsh:85:12:application call to [unknown function] (defined at: ./Server.rsh:85:12:function exp)', 'at ./Server.rsh:89:11:application call to "fn" (defined at: ./Server.rsh:88:9:function exp)', 'at ./Server.rsh:88:9:application call to [unknown function] (defined at: ./Server.rsh:88:9:function exp)'],
          msg: 'out',
          who: 'AdminApi_fundJSR'
          });
        }
      else {
        }
      
      const v2204 = v730;
      const v2206 = v737;
      const v2207 = v738;
      const v2208 = v737[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2209 = v2208[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2210 = stdlib.gt(v2209, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
      if (v2210) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'UserApi_GetJASIRIS0_88': {
      const v1229 = v848[1];
      return;
      break;
      }
    }
  
  
  };
export async function _AnyApi_h3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AnyApi_h3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AnyApi_h3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v692, v693, v696, v738, v1356] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2]);
  const v1359 = stdlib.protect(ctc3, await interact.in(), {
    at: './Server.rsh:109:5:application',
    fs: ['at ./Server.rsh:109:5:application call to [unknown function] (defined at: ./Server.rsh:109:5:function exp)'],
    msg: 'in',
    who: 'AnyApi_h'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v692, v693, v696, v738, v1356, v1359],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:109:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1361], secs: v1363, time: v1362, didSend: v572, from: v1360 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "AnyApi_h"
        });
      ;
      const v1364 = null;
      const v1365 = await txn1.getOutput('AnyApi_h', 'v1364', ctc4, v1364);
      
      sim_r.txns.push({
        kind: 'from',
        to: v692,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v692,
        tok: v696
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v696
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v1361], secs: v1363, time: v1362, didSend: v572, from: v1360 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1364 = null;
  const v1365 = await txn1.getOutput('AnyApi_h', 'v1364', ctc4, v1364);
  stdlib.protect(ctc4, await interact.out(v1361, v1365), {
    at: './Server.rsh:109:5:application',
    fs: ['at ./Server.rsh:109:5:application call to [unknown function] (defined at: ./Server.rsh:109:5:function exp)', 'at ./Server.rsh:110:10:application call to "haltK" (defined at: ./Server.rsh:109:5:function exp)'],
    msg: 'out',
    who: 'AnyApi_h'
    });
  
  ;
  ;
  return;
  
  
  
  };
export async function _UserApi_GetJASIRIS5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _UserApi_GetJASIRIS5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _UserApi_GetJASIRIS5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc8 = stdlib.T_Digest;
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc10 = stdlib.T_Struct([['AssetName', ctc6], ['AssetSymbol', ctc7], ['AssetType', ctc2], ['AssetValue', ctc2], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc8], ['Time', ctc2], ['ExtCID', ctc9]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Struct([['AssetName', ctc6], ['AssetSymbol', ctc7], ['AssetType', ctc2], ['AssetValue', ctc2], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Time', ctc2], ['ExtCID', ctc9]]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Tuple([ctc2]);
  const ctc15 = stdlib.T_Data({
    AdminApi_deprecate0_88: ctc13,
    AdminApi_fundALGOS0_88: ctc14,
    AdminApi_fundJSR0_88: ctc14,
    UserApi_GetJASIRIS0_88: ctc11
    });
  const ctc16 = stdlib.T_Tuple([ctc10, ctc2]);
  const ctc17 = stdlib.T_Null;
  
  
  const [v692, v693, v696, v730, v737, v738, v749, v750] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2]);
  const v787 = ctc.selfAddress();
  const v789 = stdlib.protect(ctc11, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:98:7:application call to [unknown function] (defined at: ./Server.rsh:98:7:function exp)', 'at ./Server.rsh:55:60:application call to "runUserApi_GetJASIRIS0_88" (defined at: ./Server.rsh:97:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'in',
    who: 'UserApi_GetJASIRIS'
    });
  const v790 = v789[stdlib.checkedBigNumberify('./Server.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v791 = v790.AssetName;
  const v792 = v790.AssetSymbol;
  const v793 = v790.AssetType;
  const v794 = v790.AssetValue;
  const v795 = v790.OwnerAddress;
  const v796 = v790.AdminAddress;
  const v797 = v790.Hash;
  const v798 = v790.Time;
  const v799 = v790.ExtCID;
  const v812 = {
    AdminAddress: v796,
    AssetName: v791,
    AssetSymbol: v792,
    AssetType: v793,
    AssetValue: v794,
    ExtCID: v799,
    OwnerAddress: v795,
    Time: v798
    };
  const v813 = stdlib.digest([ctc12], [v812]);
  const v815 = stdlib.addressEq(v787, v795);
  const v816 = stdlib.digestEq(v813, v797);
  const v817 = v815 ? v816 : false;
  const v820 = stdlib.ge(v750, v794);
  const v821 = v817 ? v820 : false;
  stdlib.assert(v821, {
    at: './Server.rsh:62:23:application',
    fs: ['at ./Server.rsh:98:20:application call to "pry" (defined at: ./Server.rsh:59:33:function exp)', 'at ./Server.rsh:98:7:application call to [unknown function] (defined at: ./Server.rsh:98:14:function exp)', 'at ./Server.rsh:98:7:application call to [unknown function] (defined at: ./Server.rsh:98:7:function exp)', 'at ./Server.rsh:55:60:application call to "runUserApi_GetJASIRIS0_88" (defined at: ./Server.rsh:97:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'You don\'t own this asset',
    who: 'UserApi_GetJASIRIS'
    });
  const v822 = stdlib.safeMuldiv(v794, stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:64:50:decimal', stdlib.UInt_max, '100'));
  const v823 = stdlib.safeAdd(v822, stdlib.checkedBigNumberify('./Server.rsh:65:30:decimal', stdlib.UInt_max, '1'));
  const v824 = stdlib.lt(v823, v794);
  stdlib.assert(v824, {
    at: './Server.rsh:65:23:application',
    fs: ['at ./Server.rsh:98:20:application call to "pry" (defined at: ./Server.rsh:59:33:function exp)', 'at ./Server.rsh:98:7:application call to [unknown function] (defined at: ./Server.rsh:98:14:function exp)', 'at ./Server.rsh:98:7:application call to [unknown function] (defined at: ./Server.rsh:98:7:function exp)', 'at ./Server.rsh:55:60:application call to "runUserApi_GetJASIRIS0_88" (defined at: ./Server.rsh:97:11:function exp)', 'at ./Server.rsh:55:60:application call to [unknown function] (defined at: ./Server.rsh:55:60:function exp)'],
    msg: 'Not enough do',
    who: 'UserApi_GetJASIRIS'
    });
  const v837 = ['UserApi_GetJASIRIS0_88', v789];
  
  const txn1 = await (ctc.sendrecv({
    args: [v692, v693, v696, v730, v737, v738, v749, v750, v837],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc15],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:99:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
      
      switch (v848[0]) {
        case 'AdminApi_deprecate0_88': {
          const v851 = v848[1];
          
          break;
          }
        case 'AdminApi_fundALGOS0_88': {
          const v977 = v848[1];
          
          break;
          }
        case 'AdminApi_fundJSR0_88': {
          const v1103 = v848[1];
          
          break;
          }
        case 'UserApi_GetJASIRIS0_88': {
          const v1229 = v848[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserApi_GetJASIRIS"
            });
          ;
          const v1278 = v1229[stdlib.checkedBigNumberify('./Server.rsh:97:11:spread', stdlib.UInt_max, '0')];
          const v1282 = v1278.AssetValue;
          const v1298 = stdlib.safeMuldiv(v1282, stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:72:50:decimal', stdlib.UInt_max, '100'));
          const v1301 = stdlib.safeSub(v1282, v1298);
          const v1312 = stdlib.sub(v750, v1301);
          const v1314 = stdlib.Array_set(v749, '0', v1312);
          const v1315 = stdlib.Array_set(v737, stdlib.checkedBigNumberify('./Server.rsh:103:32:application', stdlib.UInt_max, '0'), v1314);
          sim_r.txns.push({
            kind: 'from',
            to: v847,
            tok: v696
            });
          const v1316 = v1315[stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0')];
          const v1317 = v1316[stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0')];
          const v1321 = stdlib.sub(v1317, v1298);
          const v1323 = stdlib.Array_set(v1316, '0', v1321);
          const v1324 = stdlib.Array_set(v1315, stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0'), v1323);
          sim_r.txns.push({
            kind: 'from',
            to: v693,
            tok: v696
            });
          const v1325 = [v1278, v1301];
          const v1326 = await txn1.getOutput('UserApi_GetJASIRIS', 'v1325', ctc16, v1325);
          
          const v1353 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./Server.rsh:106:39:decimal', stdlib.UInt_max, '1'));
          const v2294 = v1353;
          const v2296 = v1324;
          const v2297 = v738;
          const v2298 = v1324[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2299 = v2298[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
          const v2300 = stdlib.gt(v2299, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
          if (v2300) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc5, ctc2, ctc4, ctc2, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [v848], secs: v850, time: v849, didSend: v404, from: v847 } = txn1;
  switch (v848[0]) {
    case 'AdminApi_deprecate0_88': {
      const v851 = v848[1];
      return;
      break;
      }
    case 'AdminApi_fundALGOS0_88': {
      const v977 = v848[1];
      return;
      break;
      }
    case 'AdminApi_fundJSR0_88': {
      const v1103 = v848[1];
      return;
      break;
      }
    case 'UserApi_GetJASIRIS0_88': {
      const v1229 = v848[1];
      undefined /* setApiDetails */;
      ;
      const v1278 = v1229[stdlib.checkedBigNumberify('./Server.rsh:97:11:spread', stdlib.UInt_max, '0')];
      const v1279 = v1278.AssetName;
      const v1280 = v1278.AssetSymbol;
      const v1281 = v1278.AssetType;
      const v1282 = v1278.AssetValue;
      const v1283 = v1278.OwnerAddress;
      const v1284 = v1278.AdminAddress;
      const v1285 = v1278.Hash;
      const v1286 = v1278.Time;
      const v1287 = v1278.ExtCID;
      const v1288 = {
        AdminAddress: v1284,
        AssetName: v1279,
        AssetSymbol: v1280,
        AssetType: v1281,
        AssetValue: v1282,
        ExtCID: v1287,
        OwnerAddress: v1283,
        Time: v1286
        };
      const v1289 = stdlib.digest([ctc12], [v1288]);
      const v1291 = stdlib.addressEq(v847, v1283);
      const v1292 = stdlib.digestEq(v1289, v1285);
      const v1293 = v1291 ? v1292 : false;
      const v1296 = stdlib.ge(v750, v1282);
      const v1297 = v1293 ? v1296 : false;
      stdlib.assert(v1297, {
        at: './Server.rsh:70:24:application',
        fs: ['at ./Server.rsh:101:30:application call to "poke" (defined at: ./Server.rsh:67:34:function exp)', 'at ./Server.rsh:100:7:application call to [unknown function] (defined at: ./Server.rsh:100:7:function exp)'],
        msg: 'You don\'t own this asset',
        who: 'UserApi_GetJASIRIS'
        });
      const v1298 = stdlib.safeMuldiv(v1282, stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:72:50:decimal', stdlib.UInt_max, '100'));
      const v1299 = stdlib.safeAdd(v1298, stdlib.checkedBigNumberify('./Server.rsh:73:31:decimal', stdlib.UInt_max, '1'));
      const v1300 = stdlib.lt(v1299, v1282);
      stdlib.assert(v1300, {
        at: './Server.rsh:73:24:application',
        fs: ['at ./Server.rsh:101:30:application call to "poke" (defined at: ./Server.rsh:67:34:function exp)', 'at ./Server.rsh:100:7:application call to [unknown function] (defined at: ./Server.rsh:100:7:function exp)'],
        msg: 'Not enough do',
        who: 'UserApi_GetJASIRIS'
        });
      const v1301 = stdlib.safeSub(v1282, v1298);
      const v1312 = stdlib.sub(v750, v1301);
      const v1314 = stdlib.Array_set(v749, '0', v1312);
      const v1315 = stdlib.Array_set(v737, stdlib.checkedBigNumberify('./Server.rsh:103:32:application', stdlib.UInt_max, '0'), v1314);
      ;
      const v1316 = v1315[stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0')];
      const v1317 = v1316[stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0')];
      const v1321 = stdlib.sub(v1317, v1298);
      const v1323 = stdlib.Array_set(v1316, '0', v1321);
      const v1324 = stdlib.Array_set(v1315, stdlib.checkedBigNumberify('./Server.rsh:104:33:application', stdlib.UInt_max, '0'), v1323);
      ;
      const v1325 = [v1278, v1301];
      const v1326 = await txn1.getOutput('UserApi_GetJASIRIS', 'v1325', ctc16, v1325);
      if (v404) {
        stdlib.protect(ctc17, await interact.out(v1229, v1326), {
          at: './Server.rsh:97:12:application',
          fs: ['at ./Server.rsh:97:12:application call to [unknown function] (defined at: ./Server.rsh:97:12:function exp)', 'at ./Server.rsh:105:11:application call to "fn" (defined at: ./Server.rsh:100:7:function exp)', 'at ./Server.rsh:100:7:application call to [unknown function] (defined at: ./Server.rsh:100:7:function exp)'],
          msg: 'out',
          who: 'UserApi_GetJASIRIS'
          });
        }
      else {
        }
      
      const v1353 = stdlib.safeAdd(v730, stdlib.checkedBigNumberify('./Server.rsh:106:39:decimal', stdlib.UInt_max, '1'));
      const v2294 = v1353;
      const v2296 = v1324;
      const v2297 = v738;
      const v2298 = v1324[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2299 = v2298[stdlib.checkedBigNumberify('./Server.rsh:57:52:application', stdlib.UInt_max, '0')];
      const v2300 = stdlib.gt(v2299, stdlib.checkedBigNumberify('./Server.rsh:78:32:decimal', stdlib.UInt_max, '0'));
      if (v2300) {
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function AdminApi_deprecate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminApi_deprecate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminApi_deprecate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _AdminApi_deprecate5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function AdminApi_fundALGOS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminApi_fundALGOS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminApi_fundALGOS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _AdminApi_fundALGOS5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function AdminApi_fundJSR(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminApi_fundJSR expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminApi_fundJSR expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _AdminApi_fundJSR5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function AnyApi_h(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AnyApi_h expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AnyApi_h expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _AnyApi_h3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function UserApi_GetJASIRIS(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for UserApi_GetJASIRIS expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for UserApi_GetJASIRIS expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _UserApi_GetJASIRIS5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`AdminApi_deprecate(byte)byte`, `AdminApi_fundALGOS(uint64)byte`, `AdminApi_fundJSR(uint64)byte`, `AnyApi_h()byte[0]`, `UserApi_GetJASIRIS((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]))((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]),uint64)`],
    pure: [`AddressView_ContractBalance()uint64`, `AddressView_SeeAddress()address`, `AddressView_SetCompanion()uint64`],
    sigs: [`AddressView_ContractBalance()uint64`, `AddressView_SeeAddress()address`, `AddressView_SetCompanion()uint64`, `AdminApi_deprecate(byte)byte`, `AdminApi_fundALGOS(uint64)byte`, `AdminApi_fundJSR(uint64)byte`, `AnyApi_h()byte[0]`, `UserApi_GetJASIRIS((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]))((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]),uint64)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAUAAEFAwRASAjYsMXPBYOg34MIsK2P3QgJ+AHrq6bnB+LFieQE4Zyv/QT0/ZPPBDBQoI0GJgMBAAEBACI1ADEYQQWeKmRJIls1ASEHWzUCNhoAF0lBAS0iNQQjNQZJIQgMQACoSSEJDEAAWUkhCgxAADwhChJENAFJJAxAABgkEkQxGCELr0k1/yNbNP8iVU0WNQdCBUMlEkQxGCELr0k1/yNbNP8iVU0WNQdCBSshCRJENhoBNf+AAQI0/1AhDK9QQgDeSSENDEAALyENEkQ0AUkkDEAAEyQSRChkKWRQSTUDVyAgNQdCBO8lEkQoZEk1A1cgIDUHQgTfIQgSRDYaATX/gAEDNP9QQgCWSSEODEAAPkkhDwxAAAghDxJEKkICTCEOEkQ0AUkkDEAAEyQSRChkKWRQSTUDV3oINQdCBJglEkQoZEk1A1dQCDUHQgSISSEQDEAAFCEQEkQ2GgE1/yk0/1AhDK9QQgA2gYPD+XgSRDYaATX/KDT/UIH/Aa9QQgAeNhoCFzUENhoDNhoBF0klDEACWkkhBAxAAc8hBBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/VyAgNf4hBVs1/SEGWzX8V1ARNfuBYVs1+oF6WzX5STUFNfiABL/h/Xk0+FCwNPgiVUmBAgxAAR5JJQxAAPElEkQ0+COBgAJYNfc090k19iERWzX1NPZXOCA19DEANPQSNPZXACA09lcgCFA09lcoCFA09RZQNPRQNPZXWCBQNPZXmAhQNPZXoGBQATT2V3ggEhA0+TT1DxBENPWBHh2BZJdJNfMjCDT1DEQ09TTzCTXyNPs0A1dpETT5NPIJFlwAXAA18bEisgE08rISIQSyEDEAshQ0/bIRszTxVwARNfCxIrIBNPOyEiEEshA0/rIUNP2yEbOACAAAAAAAAAUtNPY08hZQULA09jTyFlA1BzT/NP40/TT8IwgyBjTxNPBJIls08wkWXABcADT6QgIaSDEANP4SRIAJAAAAAAAABHcBsCk1BzT/NP40/TT8MgY0+zT6QgHzSSMMQAAnSDEANP4SRIAJAAAAAAAAA+0BsCk1BzT/NP40/TT8MgY0+zT6QgHGSDEANP4SRIAJAAAAAAAAA2MBsCk1BzT/NP40/TT8MgY0+zT6QgGfSCU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEFWzX+STUFNf2ABMiaD7s0/VCwgAgAAAAAAAAFVLAqNQexIrIBNAMhBluyCCOyEDT/sgezsSKyATQDIRJbshIhBLIQNP+yFDT+shGzsSKyASKyEiEEshAyCbIVMgqyFDT+shGzQgGhSSMMQAB0IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEGWzX9IRJbNfxXWBE1+4AEmouRdLA0/ogBxzT7VwARNfo0/TT8iAHRNP8xABJENP80A1cgIDT8IjIGNPs0+kkiWzT9CBZcAFwANP5CAKFIIROIAY0iNAESRDQESSISTDQCEhFESTUFSUpXACA1/4EgWzX+gShbNf0hEVs1/IAE6MFQyDT/UDT+FlA0/RZQNPwWULCBEa9JNftJVwARIQevXABcADX6IROIATaxIrIBIrISIQSyEDIKshQ0/LIRszT+Ig00/SINEEQxADT/UDT+FlA0/RZQNPwWUDT6UChLAVcAaWdIIzUBMgY1AkIAoTX/Nf41/TX8Nfs1+jX5NP5XABFJNfgiWyINQQBANP5XABFJNfciWzX2NPk0+lA0+xZQNPwWUDT+UDT/FlA091A09hZQKEsBVwB/ZylLAVd/A2dIJDUBMgY1AkIARDT4Ils19zT5NPpQNPsWUDT/FlA09xZQKEsBVwBYZ0glNQEyBjUCQgAbMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 130,
  unsupported: [],
  version: 11,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './Server.rsh:48:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './Server.rsh:108:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './Server.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './Server.rsh:55:60:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Admin": Admin,
  "AdminApi_deprecate": AdminApi_deprecate,
  "AdminApi_fundALGOS": AdminApi_fundALGOS,
  "AdminApi_fundJSR": AdminApi_fundJSR,
  "AnyApi_h": AnyApi_h,
  "UserApi_GetJASIRIS": UserApi_GetJASIRIS
  };
export const _APIs = {
  AdminApi: {
    deprecate: AdminApi_deprecate,
    fundALGOS: AdminApi_fundALGOS,
    fundJSR: AdminApi_fundJSR
    },
  AnyApi: {
    h: AnyApi_h
    },
  UserApi: {
    GetJASIRIS: UserApi_GetJASIRIS
    }
  };
