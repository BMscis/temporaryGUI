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
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc1, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  
  const AddressView_ContractBalance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v860, v861, v862, v863, v864, v865, v870] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v860, v861, v864, v933, v1875] = svs;
      return (await ((async () => {
        
        
        return v1875;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945] = svs;
      return (await ((async () => {
        
        
        return v945;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const AddressView_SeeAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v860, v861, v862, v863, v864, v865, v870] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v860, v861, v864, v933, v1875] = svs;
      return (await ((async () => {
        
        
        return v861;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945] = svs;
      return (await ((async () => {
        
        
        return v861;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const AddressView_SetCompanion = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v860, v861, v862, v863, v864, v865, v870] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v860, v861, v864, v933, v1875] = svs;
      return (await ((async () => {
        
        const v918 = await ctc.getContractCompanion();
        const v919 = await ctc.getContractInfo();
        const v920 = stdlib.fromSome(v918, v919);
        
        return v920;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945] = svs;
      return (await ((async () => {
        
        const v918 = await ctc.getContractCompanion();
        const v919 = await ctc.getContractInfo();
        const v920 = stdlib.fromSome(v918, v919);
        
        return v920;}))(...args));
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
          rng: ctc3
          }
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc3, ctc6],
      3: [ctc0, ctc0, ctc2, ctc1, ctc1],
      5: [ctc0, ctc0, ctc2, ctc3, ctc7, ctc3, ctc0, ctc1, ctc6, ctc1, ctc5, ctc1]
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
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc0]);
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc12 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc13 = stdlib.T_Digest;
  const ctc14 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc15 = stdlib.T_Struct([['AssetName', ctc11], ['AssetSymbol', ctc12], ['AssetType', ctc0], ['AssetValue', ctc0], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc13], ['Time', ctc0], ['ExtCID', ctc14]]);
  const ctc16 = stdlib.T_Tuple([ctc15]);
  const ctc17 = stdlib.T_Data({
    AdminApi_deprecate0_116: ctc9,
    AdminApi_fundALGOS0_116: ctc10,
    AdminApi_fundJSR0_116: ctc10,
    UserApi_GetJASIRIS0_116: ctc16
    });
  const ctc18 = stdlib.T_Struct([['AssetName', ctc11], ['AssetSymbol', ctc12], ['AssetType', ctc0], ['AssetValue', ctc0], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Time', ctc0], ['ExtCID', ctc14]]);
  const ctc19 = stdlib.T_Tuple([ctc8, ctc0]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc19]);
  const ctc21 = stdlib.T_Tuple([ctc15, ctc0, ctc8, ctc8, ctc0, ctc0]);
  const ctc22 = stdlib.T_Tuple([]);
  const ctc23 = stdlib.T_Tuple([ctc0, ctc0, ctc8]);
  const ctc24 = stdlib.T_Array(ctc23, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v842 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v843 = [v842];
  const v847 = ctc.selfAddress();
  const v849 = stdlib.protect(ctc2, await interact.tokenParams(), {
    at: './Server.rsh:52:67:application',
    fs: ['at ./Server.rsh:51:15:application call to [unknown function] (defined at: ./Server.rsh:51:19:function exp)'],
    msg: 'tokenParams',
    who: 'Admin'
    });
  const v850 = v849[stdlib.checkedBigNumberify('./Server.rsh:52:67:application', stdlib.UInt_max, '0')];
  const v851 = v849[stdlib.checkedBigNumberify('./Server.rsh:52:67:application', stdlib.UInt_max, '1')];
  const v852 = v849[stdlib.checkedBigNumberify('./Server.rsh:52:67:application', stdlib.UInt_max, '2')];
  const v856 = stdlib.protect(ctc3, await interact.getPoolContract(), {
    at: './Server.rsh:53:61:application',
    fs: ['at ./Server.rsh:51:15:application call to [unknown function] (defined at: ./Server.rsh:51:19:function exp)'],
    msg: 'getPoolContract',
    who: 'Admin'
    });
  const v857 = stdlib.gt(v850, stdlib.checkedBigNumberify('./Server.rsh:54:20:decimal', stdlib.UInt_max, '0'));
  const v858 = stdlib.gt(v851, stdlib.checkedBigNumberify('./Server.rsh:54:34:decimal', stdlib.UInt_max, '0'));
  const v859 = v857 ? v858 : false;
  stdlib.assert(v859, {
    at: './Server.rsh:54:11:application',
    fs: ['at ./Server.rsh:51:15:application call to [unknown function] (defined at: ./Server.rsh:51:19:function exp)'],
    msg: 'Please fund account',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v847, v850, v851, v852, v856],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./Server.rsh:57:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc0, ctc0, ctc1, ctc3],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:57:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v861, v862, v863, v864, v865], secs: v867, time: v866, didSend: v42, from: v860 } = txn1;
      
      const v868 = v843[stdlib.checkedBigNumberify('./Server.rsh:57:11:dot', stdlib.UInt_max, '0')];
      const v869 = stdlib.Array_set(v868, '0', stdlib.checkedBigNumberify('./Server.rsh:57:11:dot', stdlib.UInt_max, '0'));
      const v870 = stdlib.Array_set(v843, stdlib.checkedBigNumberify('./Server.rsh:57:11:dot', stdlib.UInt_max, '0'), v869);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v864
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v861, v862, v863, v864, v865], secs: v867, time: v866, didSend: v42, from: v860 } = txn1;
  const v868 = v843[stdlib.checkedBigNumberify('./Server.rsh:57:11:dot', stdlib.UInt_max, '0')];
  const v869 = stdlib.Array_set(v868, '0', stdlib.checkedBigNumberify('./Server.rsh:57:11:dot', stdlib.UInt_max, '0'));
  const v870 = stdlib.Array_set(v843, stdlib.checkedBigNumberify('./Server.rsh:57:11:dot', stdlib.UInt_max, '0'), v869);
  ;
  ;
  const v872 = stdlib.gt(v862, stdlib.checkedBigNumberify('./Server.rsh:58:21:decimal', stdlib.UInt_max, '0'));
  const v873 = stdlib.gt(v863, stdlib.checkedBigNumberify('./Server.rsh:58:35:decimal', stdlib.UInt_max, '0'));
  const v874 = v872 ? v873 : false;
  stdlib.assert(v874, {
    at: './Server.rsh:58:12:application',
    fs: [],
    msg: 'Please fund account',
    who: 'Admin'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v860, v861, v862, v863, v864, v865, v870],
    evt_cnt: 0,
    funcNum: 1,
    lct: v866,
    onlyIf: true,
    out_tys: [],
    pay: [v862, [[v863, v864]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v879, time: v878, didSend: v60, from: v877 } = txn2;
      
      sim_r.txns.push({
        amt: v862,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v884 = v870[stdlib.checkedBigNumberify('./Server.rsh:62:11:dot', stdlib.UInt_max, '0')];
      const v885 = v884[stdlib.checkedBigNumberify('./Server.rsh:62:11:dot', stdlib.UInt_max, '0')];
      const v886 = stdlib.add(v885, v863);
      const v888 = stdlib.Array_set(v884, '0', v886);
      const v889 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./Server.rsh:62:11:dot', stdlib.UInt_max, '0'), v888);
      sim_r.txns.push({
        amt: v863,
        kind: 'to',
        tok: v864
        });
      const v893 = [];
      const v894 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v865,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./Server.rsh:64:59:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./Server.rsh:64:59:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v895 = await txn2.getOutput('internal', 'v894', ctc5, v894);
      const v897 = v895[stdlib.checkedBigNumberify('./Server.rsh:64:59:application', stdlib.UInt_max, '0')];
      const v898 = v895[stdlib.checkedBigNumberify('./Server.rsh:64:59:application', stdlib.UInt_max, '1')];
      const v902 = stdlib.add(v862, v897);
      const v907 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v865,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./Server.rsh:65:55:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./Server.rsh:65:55:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc4.defaultValue /* simReturnVal */];})();
      const v908 = await txn2.getOutput('internal', 'v907', ctc6, v907);
      const v910 = v908[stdlib.checkedBigNumberify('./Server.rsh:65:55:application', stdlib.UInt_max, '0')];
      const v911 = v908[stdlib.checkedBigNumberify('./Server.rsh:65:55:application', stdlib.UInt_max, '1')];
      const v915 = stdlib.add(v902, v910);
      const v921 = await ctc.getContractInfo();
      
      const v925 = stdlib.checkedBigNumberify('./Server.rsh:71:65:decimal', stdlib.UInt_max, '0');
      const v926 = v878;
      const v932 = v889;
      const v933 = v915;
      
      if (await (async () => {
        const v939 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
        const v940 = v939[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
        const v943 = stdlib.gt(v940, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
        
        return v943;})()) {
        const v944 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
        const v945 = v944[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v1874 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
        const v1875 = v1874[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc0, ctc0, ctc1, ctc3, ctc24],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v879, time: v878, didSend: v60, from: v877 } = txn2;
  ;
  const v884 = v870[stdlib.checkedBigNumberify('./Server.rsh:62:11:dot', stdlib.UInt_max, '0')];
  const v885 = v884[stdlib.checkedBigNumberify('./Server.rsh:62:11:dot', stdlib.UInt_max, '0')];
  const v886 = stdlib.add(v885, v863);
  const v888 = stdlib.Array_set(v884, '0', v886);
  const v889 = stdlib.Array_set(v870, stdlib.checkedBigNumberify('./Server.rsh:62:11:dot', stdlib.UInt_max, '0'), v888);
  ;
  const v890 = stdlib.addressEq(v860, v877);
  stdlib.assert(v890, {
    at: './Server.rsh:62:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v893 = [];
  const v894 = undefined /* Remote */;
  const v895 = await txn2.getOutput('internal', 'v894', ctc5, v894);
  const v897 = v895[stdlib.checkedBigNumberify('./Server.rsh:64:59:application', stdlib.UInt_max, '0')];
  const v898 = v895[stdlib.checkedBigNumberify('./Server.rsh:64:59:application', stdlib.UInt_max, '1')];
  const v902 = stdlib.add(v862, v897);
  const v903 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v897);
  stdlib.assert(v903, {
    at: './Server.rsh:64:59:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v907 = undefined /* Remote */;
  const v908 = await txn2.getOutput('internal', 'v907', ctc6, v907);
  const v910 = v908[stdlib.checkedBigNumberify('./Server.rsh:65:55:application', stdlib.UInt_max, '0')];
  const v911 = v908[stdlib.checkedBigNumberify('./Server.rsh:65:55:application', stdlib.UInt_max, '1')];
  const v915 = stdlib.add(v902, v910);
  const v916 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v910);
  stdlib.assert(v916, {
    at: './Server.rsh:65:55:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v921 = await ctc.getContractInfo();
  stdlib.protect(ctc7, await interact.ready(v921, v898), {
    at: './Server.rsh:70:25:application',
    fs: ['at ./Server.rsh:70:25:application call to [unknown function] (defined at: ./Server.rsh:70:25:function exp)', 'at ./Server.rsh:70:25:application call to "liftedInteract" (defined at: ./Server.rsh:70:25:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v925 = stdlib.checkedBigNumberify('./Server.rsh:71:65:decimal', stdlib.UInt_max, '0');
  let v926 = v878;
  let v932 = v889;
  let v933 = v915;
  
  let txn3 = txn2;
  while (await (async () => {
    const v939 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v940 = v939[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v943 = stdlib.gt(v940, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
    
    return v943;})()) {
    const v944 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
    const v945 = v944[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc17],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn4;
    switch (v1087[0]) {
      case 'AdminApi_deprecate0_116': {
        const v1090 = v1087[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v1151 = stdlib.addressEq(v1086, v861);
        stdlib.assert(v1151, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:111:28:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:111:9:application call to [unknown function] (defined at: ./Server.rsh:111:9:function exp)'],
          msg: 'You are not the admin',
          who: 'Admin'
          });
        const v1153 = true;
        await txn4.getOutput('AdminApi_deprecate', 'v1153', ctc8, v1153);
        const cv925 = v925;
        const cv926 = v1088;
        const cv932 = v932;
        const cv933 = v933;
        
        v925 = cv925;
        v926 = cv926;
        v932 = cv932;
        v933 = cv933;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'AdminApi_fundALGOS0_116': {
        const v1286 = v1087[1];
        undefined /* setApiDetails */;
        const v1301 = v1286[stdlib.checkedBigNumberify('./Server.rsh:96:11:spread', stdlib.UInt_max, '0')];
        const v1338 = stdlib.add(v933, v1301);
        ;
        ;
        const v1359 = stdlib.addressEq(v1086, v861);
        stdlib.assert(v1359, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:99:28:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:99:9:application call to [unknown function] (defined at: ./Server.rsh:99:9:function exp)'],
          msg: 'You are not the admin',
          who: 'Admin'
          });
        const v1361 = true;
        await txn4.getOutput('AdminApi_fundALGOS', 'v1361', ctc8, v1361);
        const cv925 = v925;
        const cv926 = v1088;
        const cv932 = v932;
        const cv933 = v1338;
        
        v925 = cv925;
        v926 = cv926;
        v932 = cv932;
        v933 = cv933;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'AdminApi_fundJSR0_116': {
        const v1482 = v1087[1];
        undefined /* setApiDetails */;
        const v1507 = v1482[stdlib.checkedBigNumberify('./Server.rsh:102:11:spread', stdlib.UInt_max, '0')];
        ;
        const v1537 = stdlib.add(v945, v1507);
        const v1539 = stdlib.Array_set(v944, '0', v1537);
        const v1540 = stdlib.Array_set(v932, stdlib.checkedBigNumberify('./Server.rsh:71:60:dot', stdlib.UInt_max, '0'), v1539);
        ;
        const v1567 = stdlib.addressEq(v1086, v861);
        stdlib.assert(v1567, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:105:28:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:105:9:application call to [unknown function] (defined at: ./Server.rsh:105:9:function exp)'],
          msg: 'You are not the admin',
          who: 'Admin'
          });
        const v1569 = true;
        await txn4.getOutput('AdminApi_fundJSR', 'v1569', ctc8, v1569);
        const cv925 = v925;
        const cv926 = v1088;
        const cv932 = v1540;
        const cv933 = v933;
        
        v925 = cv925;
        v926 = cv926;
        v932 = cv932;
        v933 = cv933;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'UserApi_GetJASIRIS0_116': {
        const v1678 = v1087[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v1774 = v1678[stdlib.checkedBigNumberify('./Server.rsh:114:11:spread', stdlib.UInt_max, '0')];
        const v1775 = v1774.AssetName;
        const v1776 = v1774.AssetSymbol;
        const v1777 = v1774.AssetType;
        const v1778 = v1774.AssetValue;
        const v1779 = v1774.OwnerAddress;
        const v1780 = v1774.AdminAddress;
        const v1781 = v1774.Hash;
        const v1782 = v1774.Time;
        const v1783 = v1774.ExtCID;
        const v1784 = {
          AdminAddress: v1780,
          AssetName: v1775,
          AssetSymbol: v1776,
          AssetType: v1777,
          AssetValue: v1778,
          ExtCID: v1783,
          OwnerAddress: v1779,
          Time: v1782
          };
        const v1785 = stdlib.digest([ctc18], [v1784]);
        const v1787 = stdlib.addressEq(v1086, v1779);
        const v1788 = stdlib.digestEq(v1785, v1781);
        const v1789 = v1787 ? v1788 : false;
        const v1792 = stdlib.ge(v945, v1778);
        const v1793 = v1789 ? v1792 : false;
        stdlib.assert(v1793, {
          at: './Server.rsh:86:24:application',
          fs: ['at ./Server.rsh:118:30:application call to "poke" (defined at: ./Server.rsh:83:34:function exp)', 'at ./Server.rsh:117:7:application call to [unknown function] (defined at: ./Server.rsh:117:7:function exp)'],
          msg: 'You don\'t own this asset',
          who: 'Admin'
          });
        const v1794 = stdlib.safeMuldiv(v1778, stdlib.checkedBigNumberify('./JasiriTypes.rsh:66:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:88:50:decimal', stdlib.UInt_max, '100'));
        const v1795 = stdlib.safeAdd(v1794, stdlib.checkedBigNumberify('./Server.rsh:89:31:decimal', stdlib.UInt_max, '1'));
        const v1796 = stdlib.lt(v1795, v1778);
        stdlib.assert(v1796, {
          at: './Server.rsh:89:24:application',
          fs: ['at ./Server.rsh:118:30:application call to "poke" (defined at: ./Server.rsh:83:34:function exp)', 'at ./Server.rsh:117:7:application call to [unknown function] (defined at: ./Server.rsh:117:7:function exp)'],
          msg: 'Not enough do',
          who: 'Admin'
          });
        const v1797 = stdlib.safeSub(v1778, v1794);
        const v1808 = stdlib.sub(v945, v1797);
        const v1810 = stdlib.Array_set(v944, '0', v1808);
        const v1811 = stdlib.Array_set(v932, stdlib.checkedBigNumberify('./Server.rsh:120:32:application', stdlib.UInt_max, '0'), v1810);
        ;
        const v1815 = v1811[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
        const v1816 = v1815[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
        const v1820 = stdlib.sub(v1816, v1794);
        const v1822 = stdlib.Array_set(v1815, '0', v1820);
        const v1823 = stdlib.Array_set(v1811, stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0'), v1822);
        const v1825 = {
          Address: v1779,
          Stake: v1794
          };
        const v1826 = undefined /* Remote */;
        const v1827 = await txn4.getOutput('internal', 'v1826', ctc20, v1826);
        const v1829 = v1827[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
        const v1830 = v1827[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '1')];
        const v1831 = v1830[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
        const v1832 = v1830[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '1')];
        const v1836 = stdlib.add(v933, v1829);
        const v1837 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1829);
        stdlib.assert(v1837, {
          at: './Server.rsh:126:60:application',
          fs: ['at ./Server.rsh:117:7:application call to [unknown function] (defined at: ./Server.rsh:117:7:function exp)'],
          msg: 'remote bill check',
          who: 'Admin'
          });
        const v1840 = [v1774, v1797, true, v1831, v1832, v1794];
        await txn4.getOutput('UserApi_GetJASIRIS', 'v1840', ctc21, v1840);
        const v1872 = stdlib.safeAdd(v925, stdlib.checkedBigNumberify('./Server.rsh:128:39:decimal', stdlib.UInt_max, '1'));
        const cv925 = v1872;
        const cv926 = v1088;
        const cv932 = v1823;
        const cv933 = v1836;
        
        v925 = cv925;
        v926 = cv926;
        v932 = cv932;
        v933 = cv933;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v1874 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
  const v1875 = v1874[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc22],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1880], secs: v1882, time: v1881, didSend: v723, from: v1879 } = txn4;
  undefined /* setApiDetails */;
  ;
  const v1883 = null;
  await txn4.getOutput('AnyApi_h', 'v1883', ctc7, v1883);
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
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc12 = stdlib.T_Digest;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc14 = stdlib.T_Struct([['AssetName', ctc10], ['AssetSymbol', ctc11], ['AssetType', ctc4], ['AssetValue', ctc4], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc12], ['Time', ctc4], ['ExtCID', ctc13]]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Data({
    AdminApi_deprecate0_116: ctc8,
    AdminApi_fundALGOS0_116: ctc9,
    AdminApi_fundJSR0_116: ctc9,
    UserApi_GetJASIRIS0_116: ctc15
    });
  const ctc17 = stdlib.T_Null;
  
  
  const [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v970 = ctc.selfAddress();
  const v972 = stdlib.protect(ctc8, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:109:9:application call to [unknown function] (defined at: ./Server.rsh:109:9:function exp)', 'at ./Server.rsh:71:60:application call to "runAdminApi_deprecate0_116" (defined at: ./Server.rsh:108:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'in',
    who: 'AdminApi_deprecate'
    });
  const v975 = stdlib.addressEq(v970, v861);
  stdlib.assert(v975, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:109:23:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:109:9:application call to [unknown function] (defined at: ./Server.rsh:109:14:function exp)', 'at ./Server.rsh:109:9:application call to [unknown function] (defined at: ./Server.rsh:109:9:function exp)', 'at ./Server.rsh:71:60:application call to "runAdminApi_deprecate0_116" (defined at: ./Server.rsh:108:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'You are not the admin',
    who: 'AdminApi_deprecate'
    });
  const v980 = ['AdminApi_deprecate0_116', v972];
  
  const txn1 = await (ctc.sendrecv({
    args: [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945, v980],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:110:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./Server.rsh:110:23:decimal', stdlib.UInt_max, '0'), v864]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
      
      switch (v1087[0]) {
        case 'AdminApi_deprecate0_116': {
          const v1090 = v1087[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminApi_deprecate"
            });
          ;
          ;
          const v1153 = true;
          const v1154 = await txn1.getOutput('AdminApi_deprecate', 'v1153', ctc5, v1153);
          
          const v2543 = v925;
          const v2545 = v932;
          const v2546 = v933;
          const v2547 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2548 = v2547[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2549 = stdlib.gt(v2548, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
          if (v2549) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'AdminApi_fundALGOS0_116': {
          const v1286 = v1087[1];
          
          break;
          }
        case 'AdminApi_fundJSR0_116': {
          const v1482 = v1087[1];
          
          break;
          }
        case 'UserApi_GetJASIRIS0_116': {
          const v1678 = v1087[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
  switch (v1087[0]) {
    case 'AdminApi_deprecate0_116': {
      const v1090 = v1087[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1151 = stdlib.addressEq(v1086, v861);
      stdlib.assert(v1151, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:111:28:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:111:9:application call to [unknown function] (defined at: ./Server.rsh:111:9:function exp)'],
        msg: 'You are not the admin',
        who: 'AdminApi_deprecate'
        });
      const v1153 = true;
      const v1154 = await txn1.getOutput('AdminApi_deprecate', 'v1153', ctc5, v1153);
      if (v532) {
        stdlib.protect(ctc17, await interact.out(v1090, v1154), {
          at: './Server.rsh:108:12:application',
          fs: ['at ./Server.rsh:108:12:application call to [unknown function] (defined at: ./Server.rsh:108:12:function exp)', 'at ./Server.rsh:112:11:application call to "fn" (defined at: ./Server.rsh:111:9:function exp)', 'at ./Server.rsh:111:9:application call to [unknown function] (defined at: ./Server.rsh:111:9:function exp)'],
          msg: 'out',
          who: 'AdminApi_deprecate'
          });
        }
      else {
        }
      
      const v2543 = v925;
      const v2545 = v932;
      const v2546 = v933;
      const v2547 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2548 = v2547[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2549 = stdlib.gt(v2548, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
      if (v2549) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'AdminApi_fundALGOS0_116': {
      const v1286 = v1087[1];
      return;
      break;
      }
    case 'AdminApi_fundJSR0_116': {
      const v1482 = v1087[1];
      return;
      break;
      }
    case 'UserApi_GetJASIRIS0_116': {
      const v1678 = v1087[1];
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
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc5]);
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc12 = stdlib.T_Digest;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc14 = stdlib.T_Struct([['AssetName', ctc10], ['AssetSymbol', ctc11], ['AssetType', ctc4], ['AssetValue', ctc4], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc12], ['Time', ctc4], ['ExtCID', ctc13]]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Data({
    AdminApi_deprecate0_116: ctc9,
    AdminApi_fundALGOS0_116: ctc8,
    AdminApi_fundJSR0_116: ctc8,
    UserApi_GetJASIRIS0_116: ctc15
    });
  const ctc17 = stdlib.T_Null;
  
  
  const [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v946 = ctc.selfAddress();
  const v948 = stdlib.protect(ctc8, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:97:9:application call to [unknown function] (defined at: ./Server.rsh:97:9:function exp)', 'at ./Server.rsh:71:60:application call to "runAdminApi_fundALGOS0_116" (defined at: ./Server.rsh:96:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'in',
    who: 'AdminApi_fundALGOS'
    });
  const v949 = v948[stdlib.checkedBigNumberify('./Server.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v951 = stdlib.addressEq(v946, v861);
  stdlib.assert(v951, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:97:24:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:97:9:application call to [unknown function] (defined at: ./Server.rsh:97:14:function exp)', 'at ./Server.rsh:97:9:application call to [unknown function] (defined at: ./Server.rsh:97:9:function exp)', 'at ./Server.rsh:71:60:application call to "runAdminApi_fundALGOS0_116" (defined at: ./Server.rsh:96:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'You are not the admin',
    who: 'AdminApi_fundALGOS'
    });
  const v956 = ['AdminApi_fundALGOS0_116', v948];
  
  const txn1 = await (ctc.sendrecv({
    args: [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945, v956],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [v949, [[stdlib.checkedBigNumberify('./Server.rsh:98:25:decimal', stdlib.UInt_max, '0'), v864]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
      
      switch (v1087[0]) {
        case 'AdminApi_deprecate0_116': {
          const v1090 = v1087[1];
          
          break;
          }
        case 'AdminApi_fundALGOS0_116': {
          const v1286 = v1087[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminApi_fundALGOS"
            });
          const v1301 = v1286[stdlib.checkedBigNumberify('./Server.rsh:96:11:spread', stdlib.UInt_max, '0')];
          const v1338 = stdlib.add(v933, v1301);
          sim_r.txns.push({
            amt: v1301,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          const v1361 = true;
          const v1362 = await txn1.getOutput('AdminApi_fundALGOS', 'v1361', ctc5, v1361);
          
          const v2633 = v925;
          const v2635 = v932;
          const v2636 = v1338;
          const v2637 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2638 = v2637[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2639 = stdlib.gt(v2638, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
          if (v2639) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'AdminApi_fundJSR0_116': {
          const v1482 = v1087[1];
          
          break;
          }
        case 'UserApi_GetJASIRIS0_116': {
          const v1678 = v1087[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
  switch (v1087[0]) {
    case 'AdminApi_deprecate0_116': {
      const v1090 = v1087[1];
      return;
      break;
      }
    case 'AdminApi_fundALGOS0_116': {
      const v1286 = v1087[1];
      undefined /* setApiDetails */;
      const v1301 = v1286[stdlib.checkedBigNumberify('./Server.rsh:96:11:spread', stdlib.UInt_max, '0')];
      const v1338 = stdlib.add(v933, v1301);
      ;
      ;
      const v1359 = stdlib.addressEq(v1086, v861);
      stdlib.assert(v1359, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:99:28:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:99:9:application call to [unknown function] (defined at: ./Server.rsh:99:9:function exp)'],
        msg: 'You are not the admin',
        who: 'AdminApi_fundALGOS'
        });
      const v1361 = true;
      const v1362 = await txn1.getOutput('AdminApi_fundALGOS', 'v1361', ctc5, v1361);
      if (v532) {
        stdlib.protect(ctc17, await interact.out(v1286, v1362), {
          at: './Server.rsh:96:12:application',
          fs: ['at ./Server.rsh:96:12:application call to [unknown function] (defined at: ./Server.rsh:96:12:function exp)', 'at ./Server.rsh:100:11:application call to "fn" (defined at: ./Server.rsh:99:9:function exp)', 'at ./Server.rsh:99:9:application call to [unknown function] (defined at: ./Server.rsh:99:9:function exp)'],
          msg: 'out',
          who: 'AdminApi_fundALGOS'
          });
        }
      else {
        }
      
      const v2633 = v925;
      const v2635 = v932;
      const v2636 = v1338;
      const v2637 = v932[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2638 = v2637[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2639 = stdlib.gt(v2638, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
      if (v2639) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'AdminApi_fundJSR0_116': {
      const v1482 = v1087[1];
      return;
      break;
      }
    case 'UserApi_GetJASIRIS0_116': {
      const v1678 = v1087[1];
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
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([ctc5]);
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc12 = stdlib.T_Digest;
  const ctc13 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc14 = stdlib.T_Struct([['AssetName', ctc10], ['AssetSymbol', ctc11], ['AssetType', ctc4], ['AssetValue', ctc4], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc12], ['Time', ctc4], ['ExtCID', ctc13]]);
  const ctc15 = stdlib.T_Tuple([ctc14]);
  const ctc16 = stdlib.T_Data({
    AdminApi_deprecate0_116: ctc9,
    AdminApi_fundALGOS0_116: ctc8,
    AdminApi_fundJSR0_116: ctc8,
    UserApi_GetJASIRIS0_116: ctc15
    });
  const ctc17 = stdlib.T_Null;
  
  
  const [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v958 = ctc.selfAddress();
  const v960 = stdlib.protect(ctc8, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:103:9:application call to [unknown function] (defined at: ./Server.rsh:103:9:function exp)', 'at ./Server.rsh:71:60:application call to "runAdminApi_fundJSR0_116" (defined at: ./Server.rsh:102:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'in',
    who: 'AdminApi_fundJSR'
    });
  const v961 = v960[stdlib.checkedBigNumberify('./Server.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v963 = stdlib.addressEq(v958, v861);
  stdlib.assert(v963, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:103:24:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:103:9:application call to [unknown function] (defined at: ./Server.rsh:103:14:function exp)', 'at ./Server.rsh:103:9:application call to [unknown function] (defined at: ./Server.rsh:103:9:function exp)', 'at ./Server.rsh:71:60:application call to "runAdminApi_fundJSR0_116" (defined at: ./Server.rsh:102:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'You are not the admin',
    who: 'AdminApi_fundJSR'
    });
  const v968 = ['AdminApi_fundJSR0_116', v960];
  
  const txn1 = await (ctc.sendrecv({
    args: [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945, v968],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc16],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:104:23:decimal', stdlib.UInt_max, '0'), [[v961, v864]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
      
      switch (v1087[0]) {
        case 'AdminApi_deprecate0_116': {
          const v1090 = v1087[1];
          
          break;
          }
        case 'AdminApi_fundALGOS0_116': {
          const v1286 = v1087[1];
          
          break;
          }
        case 'AdminApi_fundJSR0_116': {
          const v1482 = v1087[1];
          sim_r.txns.push({
            kind: 'api',
            who: "AdminApi_fundJSR"
            });
          const v1507 = v1482[stdlib.checkedBigNumberify('./Server.rsh:102:11:spread', stdlib.UInt_max, '0')];
          ;
          const v1537 = stdlib.add(v945, v1507);
          const v1539 = stdlib.Array_set(v944, '0', v1537);
          const v1540 = stdlib.Array_set(v932, stdlib.checkedBigNumberify('./Server.rsh:71:60:dot', stdlib.UInt_max, '0'), v1539);
          sim_r.txns.push({
            amt: v1507,
            kind: 'to',
            tok: v864
            });
          const v1569 = true;
          const v1570 = await txn1.getOutput('AdminApi_fundJSR', 'v1569', ctc5, v1569);
          
          const v2723 = v925;
          const v2725 = v1540;
          const v2726 = v933;
          const v2727 = v1540[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2728 = v2727[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2729 = stdlib.gt(v2728, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
          if (v2729) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'UserApi_GetJASIRIS0_116': {
          const v1678 = v1087[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4, ctc16],
    waitIfNotPresent: false
    }));
  const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
  switch (v1087[0]) {
    case 'AdminApi_deprecate0_116': {
      const v1090 = v1087[1];
      return;
      break;
      }
    case 'AdminApi_fundALGOS0_116': {
      const v1286 = v1087[1];
      return;
      break;
      }
    case 'AdminApi_fundJSR0_116': {
      const v1482 = v1087[1];
      undefined /* setApiDetails */;
      const v1507 = v1482[stdlib.checkedBigNumberify('./Server.rsh:102:11:spread', stdlib.UInt_max, '0')];
      ;
      const v1537 = stdlib.add(v945, v1507);
      const v1539 = stdlib.Array_set(v944, '0', v1537);
      const v1540 = stdlib.Array_set(v932, stdlib.checkedBigNumberify('./Server.rsh:71:60:dot', stdlib.UInt_max, '0'), v1539);
      ;
      const v1567 = stdlib.addressEq(v1086, v861);
      stdlib.assert(v1567, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Server.rsh:74:43:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Server.rsh:105:28:application call to "isAdmin" (defined at: ./Server.rsh:74:35:function exp)', 'at ./Server.rsh:105:9:application call to [unknown function] (defined at: ./Server.rsh:105:9:function exp)'],
        msg: 'You are not the admin',
        who: 'AdminApi_fundJSR'
        });
      const v1569 = true;
      const v1570 = await txn1.getOutput('AdminApi_fundJSR', 'v1569', ctc5, v1569);
      if (v532) {
        stdlib.protect(ctc17, await interact.out(v1482, v1570), {
          at: './Server.rsh:102:12:application',
          fs: ['at ./Server.rsh:102:12:application call to [unknown function] (defined at: ./Server.rsh:102:12:function exp)', 'at ./Server.rsh:106:11:application call to "fn" (defined at: ./Server.rsh:105:9:function exp)', 'at ./Server.rsh:105:9:application call to [unknown function] (defined at: ./Server.rsh:105:9:function exp)'],
          msg: 'out',
          who: 'AdminApi_fundJSR'
          });
        }
      else {
        }
      
      const v2723 = v925;
      const v2725 = v1540;
      const v2726 = v933;
      const v2727 = v1540[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2728 = v2727[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2729 = stdlib.gt(v2728, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
      if (v2729) {
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'UserApi_GetJASIRIS0_116': {
      const v1678 = v1087[1];
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
  
  
  const [v860, v861, v864, v933, v1875] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2]);
  const v1878 = stdlib.protect(ctc3, await interact.in(), {
    at: './Server.rsh:131:5:application',
    fs: ['at ./Server.rsh:131:5:application call to [unknown function] (defined at: ./Server.rsh:131:5:function exp)'],
    msg: 'in',
    who: 'AnyApi_h'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v860, v861, v864, v933, v1875, v1878],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:131:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1880], secs: v1882, time: v1881, didSend: v723, from: v1879 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "AnyApi_h"
        });
      ;
      const v1883 = null;
      const v1884 = await txn1.getOutput('AnyApi_h', 'v1883', ctc4, v1883);
      
      sim_r.txns.push({
        kind: 'from',
        to: v860,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v860,
        tok: v864
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v864
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
  const {data: [v1880], secs: v1882, time: v1881, didSend: v723, from: v1879 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1883 = null;
  const v1884 = await txn1.getOutput('AnyApi_h', 'v1883', ctc4, v1883);
  stdlib.protect(ctc4, await interact.out(v1880, v1884), {
    at: './Server.rsh:131:5:application',
    fs: ['at ./Server.rsh:131:5:application call to [unknown function] (defined at: ./Server.rsh:131:5:function exp)', 'at ./Server.rsh:132:10:application call to "haltK" (defined at: ./Server.rsh:131:5:function exp)'],
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
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc10 = stdlib.T_Digest;
  const ctc11 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc12 = stdlib.T_Struct([['AssetName', ctc8], ['AssetSymbol', ctc9], ['AssetType', ctc4], ['AssetValue', ctc4], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Hash', ctc10], ['Time', ctc4], ['ExtCID', ctc11]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Struct([['AssetName', ctc8], ['AssetSymbol', ctc9], ['AssetType', ctc4], ['AssetValue', ctc4], ['OwnerAddress', ctc0], ['AdminAddress', ctc0], ['Time', ctc4], ['ExtCID', ctc11]]);
  const ctc15 = stdlib.T_Tuple([ctc5]);
  const ctc16 = stdlib.T_Tuple([ctc4]);
  const ctc17 = stdlib.T_Data({
    AdminApi_deprecate0_116: ctc15,
    AdminApi_fundALGOS0_116: ctc16,
    AdminApi_fundJSR0_116: ctc16,
    UserApi_GetJASIRIS0_116: ctc13
    });
  const ctc18 = stdlib.T_Tuple([ctc5, ctc4]);
  const ctc19 = stdlib.T_Tuple([ctc4, ctc18]);
  const ctc20 = stdlib.T_Tuple([ctc12, ctc4, ctc5, ctc5, ctc4, ctc4]);
  const ctc21 = stdlib.T_Null;
  
  
  const [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4]);
  const v982 = ctc.selfAddress();
  const v984 = stdlib.protect(ctc13, await interact.in(), {
    at: './Server.rsh:1:23:application',
    fs: ['at ./Server.rsh:115:7:application call to [unknown function] (defined at: ./Server.rsh:115:7:function exp)', 'at ./Server.rsh:71:60:application call to "runUserApi_GetJASIRIS0_116" (defined at: ./Server.rsh:114:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'in',
    who: 'UserApi_GetJASIRIS'
    });
  const v985 = v984[stdlib.checkedBigNumberify('./Server.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v986 = v985.AssetName;
  const v987 = v985.AssetSymbol;
  const v988 = v985.AssetType;
  const v989 = v985.AssetValue;
  const v990 = v985.OwnerAddress;
  const v991 = v985.AdminAddress;
  const v992 = v985.Hash;
  const v993 = v985.Time;
  const v994 = v985.ExtCID;
  const v1007 = {
    AdminAddress: v991,
    AssetName: v986,
    AssetSymbol: v987,
    AssetType: v988,
    AssetValue: v989,
    ExtCID: v994,
    OwnerAddress: v990,
    Time: v993
    };
  const v1008 = stdlib.digest([ctc14], [v1007]);
  const v1010 = stdlib.addressEq(v982, v990);
  const v1011 = stdlib.digestEq(v1008, v992);
  const v1012 = v1010 ? v1011 : false;
  const v1015 = stdlib.ge(v945, v989);
  const v1016 = v1012 ? v1015 : false;
  stdlib.assert(v1016, {
    at: './Server.rsh:78:23:application',
    fs: ['at ./Server.rsh:115:20:application call to "pry" (defined at: ./Server.rsh:75:33:function exp)', 'at ./Server.rsh:115:7:application call to [unknown function] (defined at: ./Server.rsh:115:14:function exp)', 'at ./Server.rsh:115:7:application call to [unknown function] (defined at: ./Server.rsh:115:7:function exp)', 'at ./Server.rsh:71:60:application call to "runUserApi_GetJASIRIS0_116" (defined at: ./Server.rsh:114:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'You don\'t own this asset',
    who: 'UserApi_GetJASIRIS'
    });
  const v1017 = stdlib.safeMuldiv(v989, stdlib.checkedBigNumberify('./JasiriTypes.rsh:66:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:80:50:decimal', stdlib.UInt_max, '100'));
  const v1018 = stdlib.safeAdd(v1017, stdlib.checkedBigNumberify('./Server.rsh:81:30:decimal', stdlib.UInt_max, '1'));
  const v1019 = stdlib.lt(v1018, v989);
  stdlib.assert(v1019, {
    at: './Server.rsh:81:23:application',
    fs: ['at ./Server.rsh:115:20:application call to "pry" (defined at: ./Server.rsh:75:33:function exp)', 'at ./Server.rsh:115:7:application call to [unknown function] (defined at: ./Server.rsh:115:14:function exp)', 'at ./Server.rsh:115:7:application call to [unknown function] (defined at: ./Server.rsh:115:7:function exp)', 'at ./Server.rsh:71:60:application call to "runUserApi_GetJASIRIS0_116" (defined at: ./Server.rsh:114:11:function exp)', 'at ./Server.rsh:71:60:application call to [unknown function] (defined at: ./Server.rsh:71:60:function exp)'],
    msg: 'Not enough do',
    who: 'UserApi_GetJASIRIS'
    });
  const v1032 = ['UserApi_GetJASIRIS0_116', v984];
  
  const txn1 = await (ctc.sendrecv({
    args: [v860, v861, v864, v865, v893, v898, v911, v925, v932, v933, v944, v945, v1032],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./Server.rsh:116:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./Server.rsh:116:24:decimal', stdlib.UInt_max, '0'), v864]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
      
      switch (v1087[0]) {
        case 'AdminApi_deprecate0_116': {
          const v1090 = v1087[1];
          
          break;
          }
        case 'AdminApi_fundALGOS0_116': {
          const v1286 = v1087[1];
          
          break;
          }
        case 'AdminApi_fundJSR0_116': {
          const v1482 = v1087[1];
          
          break;
          }
        case 'UserApi_GetJASIRIS0_116': {
          const v1678 = v1087[1];
          sim_r.txns.push({
            kind: 'api',
            who: "UserApi_GetJASIRIS"
            });
          ;
          ;
          const v1774 = v1678[stdlib.checkedBigNumberify('./Server.rsh:114:11:spread', stdlib.UInt_max, '0')];
          const v1778 = v1774.AssetValue;
          const v1779 = v1774.OwnerAddress;
          const v1794 = stdlib.safeMuldiv(v1778, stdlib.checkedBigNumberify('./JasiriTypes.rsh:66:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:88:50:decimal', stdlib.UInt_max, '100'));
          const v1797 = stdlib.safeSub(v1778, v1794);
          const v1808 = stdlib.sub(v945, v1797);
          const v1810 = stdlib.Array_set(v944, '0', v1808);
          const v1811 = stdlib.Array_set(v932, stdlib.checkedBigNumberify('./Server.rsh:120:32:application', stdlib.UInt_max, '0'), v1810);
          sim_r.txns.push({
            kind: 'from',
            to: v1086,
            tok: v864
            });
          const v1815 = v1811[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
          const v1816 = v1815[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
          const v1820 = stdlib.sub(v1816, v1794);
          const v1822 = stdlib.Array_set(v1815, '0', v1820);
          const v1823 = stdlib.Array_set(v1811, stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0'), v1822);
          const v1825 = {
            Address: v1779,
            Stake: v1794
            };
          const v1826 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v865,
              remote: ({
                accs: [v911, v1779],
                apps: [v898],
                bills: stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0'),
                fees: stdlib.checkedBigNumberify('./Server.rsh:124:49:decimal', stdlib.UInt_max, '1'),
                pays: stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '1'),
                toks: [v864]
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc18.defaultValue /* simReturnVal */];})();
          const v1827 = await txn1.getOutput('internal', 'v1826', ctc19, v1826);
          const v1829 = v1827[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
          const v1830 = v1827[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '1')];
          const v1831 = v1830[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
          const v1832 = v1830[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '1')];
          const v1836 = stdlib.add(v933, v1829);
          const v1840 = [v1774, v1797, true, v1831, v1832, v1794];
          const v1841 = await txn1.getOutput('UserApi_GetJASIRIS', 'v1840', ctc20, v1840);
          
          const v1872 = stdlib.safeAdd(v925, stdlib.checkedBigNumberify('./Server.rsh:128:39:decimal', stdlib.UInt_max, '1'));
          const v2813 = v1872;
          const v2815 = v1823;
          const v2816 = v1836;
          const v2817 = v1823[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2818 = v2817[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
          const v2819 = stdlib.gt(v2818, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
          if (v2819) {
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
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc2, ctc0, ctc4, ctc7, ctc4, ctc6, ctc4, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v1087], secs: v1089, time: v1088, didSend: v532, from: v1086 } = txn1;
  switch (v1087[0]) {
    case 'AdminApi_deprecate0_116': {
      const v1090 = v1087[1];
      return;
      break;
      }
    case 'AdminApi_fundALGOS0_116': {
      const v1286 = v1087[1];
      return;
      break;
      }
    case 'AdminApi_fundJSR0_116': {
      const v1482 = v1087[1];
      return;
      break;
      }
    case 'UserApi_GetJASIRIS0_116': {
      const v1678 = v1087[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v1774 = v1678[stdlib.checkedBigNumberify('./Server.rsh:114:11:spread', stdlib.UInt_max, '0')];
      const v1775 = v1774.AssetName;
      const v1776 = v1774.AssetSymbol;
      const v1777 = v1774.AssetType;
      const v1778 = v1774.AssetValue;
      const v1779 = v1774.OwnerAddress;
      const v1780 = v1774.AdminAddress;
      const v1781 = v1774.Hash;
      const v1782 = v1774.Time;
      const v1783 = v1774.ExtCID;
      const v1784 = {
        AdminAddress: v1780,
        AssetName: v1775,
        AssetSymbol: v1776,
        AssetType: v1777,
        AssetValue: v1778,
        ExtCID: v1783,
        OwnerAddress: v1779,
        Time: v1782
        };
      const v1785 = stdlib.digest([ctc14], [v1784]);
      const v1787 = stdlib.addressEq(v1086, v1779);
      const v1788 = stdlib.digestEq(v1785, v1781);
      const v1789 = v1787 ? v1788 : false;
      const v1792 = stdlib.ge(v945, v1778);
      const v1793 = v1789 ? v1792 : false;
      stdlib.assert(v1793, {
        at: './Server.rsh:86:24:application',
        fs: ['at ./Server.rsh:118:30:application call to "poke" (defined at: ./Server.rsh:83:34:function exp)', 'at ./Server.rsh:117:7:application call to [unknown function] (defined at: ./Server.rsh:117:7:function exp)'],
        msg: 'You don\'t own this asset',
        who: 'UserApi_GetJASIRIS'
        });
      const v1794 = stdlib.safeMuldiv(v1778, stdlib.checkedBigNumberify('./JasiriTypes.rsh:66:24:decimal', stdlib.UInt_max, '30'), stdlib.checkedBigNumberify('./Server.rsh:88:50:decimal', stdlib.UInt_max, '100'));
      const v1795 = stdlib.safeAdd(v1794, stdlib.checkedBigNumberify('./Server.rsh:89:31:decimal', stdlib.UInt_max, '1'));
      const v1796 = stdlib.lt(v1795, v1778);
      stdlib.assert(v1796, {
        at: './Server.rsh:89:24:application',
        fs: ['at ./Server.rsh:118:30:application call to "poke" (defined at: ./Server.rsh:83:34:function exp)', 'at ./Server.rsh:117:7:application call to [unknown function] (defined at: ./Server.rsh:117:7:function exp)'],
        msg: 'Not enough do',
        who: 'UserApi_GetJASIRIS'
        });
      const v1797 = stdlib.safeSub(v1778, v1794);
      const v1808 = stdlib.sub(v945, v1797);
      const v1810 = stdlib.Array_set(v944, '0', v1808);
      const v1811 = stdlib.Array_set(v932, stdlib.checkedBigNumberify('./Server.rsh:120:32:application', stdlib.UInt_max, '0'), v1810);
      ;
      const v1815 = v1811[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
      const v1816 = v1815[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
      const v1820 = stdlib.sub(v1816, v1794);
      const v1822 = stdlib.Array_set(v1815, '0', v1820);
      const v1823 = stdlib.Array_set(v1811, stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0'), v1822);
      const v1825 = {
        Address: v1779,
        Stake: v1794
        };
      const v1826 = undefined /* Remote */;
      const v1827 = await txn1.getOutput('internal', 'v1826', ctc19, v1826);
      const v1829 = v1827[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
      const v1830 = v1827[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '1')];
      const v1831 = v1830[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '0')];
      const v1832 = v1830[stdlib.checkedBigNumberify('./Server.rsh:126:60:application', stdlib.UInt_max, '1')];
      const v1836 = stdlib.add(v933, v1829);
      const v1837 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1829);
      stdlib.assert(v1837, {
        at: './Server.rsh:126:60:application',
        fs: ['at ./Server.rsh:117:7:application call to [unknown function] (defined at: ./Server.rsh:117:7:function exp)'],
        msg: 'remote bill check',
        who: 'UserApi_GetJASIRIS'
        });
      const v1840 = [v1774, v1797, true, v1831, v1832, v1794];
      const v1841 = await txn1.getOutput('UserApi_GetJASIRIS', 'v1840', ctc20, v1840);
      if (v532) {
        stdlib.protect(ctc21, await interact.out(v1678, v1841), {
          at: './Server.rsh:114:12:application',
          fs: ['at ./Server.rsh:114:12:application call to [unknown function] (defined at: ./Server.rsh:114:12:function exp)', 'at ./Server.rsh:127:11:application call to "fn" (defined at: ./Server.rsh:117:7:function exp)', 'at ./Server.rsh:117:7:application call to [unknown function] (defined at: ./Server.rsh:117:7:function exp)'],
          msg: 'out',
          who: 'UserApi_GetJASIRIS'
          });
        }
      else {
        }
      
      const v1872 = stdlib.safeAdd(v925, stdlib.checkedBigNumberify('./Server.rsh:128:39:decimal', stdlib.UInt_max, '1'));
      const v2813 = v1872;
      const v2815 = v1823;
      const v2816 = v1836;
      const v2817 = v1823[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2818 = v2817[stdlib.checkedBigNumberify('./Server.rsh:73:52:application', stdlib.UInt_max, '0')];
      const v2819 = stdlib.gt(v2818, stdlib.checkedBigNumberify('./Server.rsh:95:32:decimal', stdlib.UInt_max, '0'));
      if (v2819) {
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
    impure: [`AdminApi_deprecate(byte)byte`, `AdminApi_fundALGOS(uint64)byte`, `AdminApi_fundJSR(uint64)byte`, `AnyApi_h()byte[0]`, `UserApi_GetJASIRIS((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]))((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]),uint64,byte,byte,uint64,uint64)`],
    pure: [`AddressView_ContractBalance()uint64`, `AddressView_SeeAddress()address`, `AddressView_SetCompanion()uint64`],
    sigs: [`AddressView_ContractBalance()uint64`, `AddressView_SeeAddress()address`, `AddressView_SetCompanion()uint64`, `AdminApi_deprecate(byte)byte`, `AdminApi_fundALGOS(uint64)byte`, `AdminApi_fundJSR(uint64)byte`, `AnyApi_h()byte[0]`, `UserApi_GetJASIRIS((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]))((byte[32],byte[8],uint64,uint64,address,address,digest,uint64,byte[96]),uint64,byte,byte,uint64,uint64)`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAVAAEFAwQIQEhQBuGcr/0Eg6DfgwiwrY/dCAn4AeurpucH9P2TzwTixYnkBKCa1ooBMKCNBiYEAQABAQAFYXBwSUQiNQAxGEEHoCpkSSJbNQEhBVs1AjYaABdJQQEtIjUEIzUGSSEKDEAAnkkhCwxAAFlJIQwMQAA8IQwSRDQBSSQMQAAYJBJEMRghDa9JNf8jWzT/IlVNFjUHQgdFJRJEMRghDa9JNf8jWzT/IlVNFjUHQgctIQsSRDYaATX/gAECNP9QIQ6vUEIA3kkhDwxAAC8hDxJENAFJJAxAABMkEkQoZClkUEk1A1cgIDUHQgbxJRJEKGRJNQNXICA1B0IG4SEKEkQqQgN4SSEQDEAASkkhEQxAAC8hERJENAFJJAxAABMkEkQoZClkUEk1A1eqCDUHQgasJRJEKGRJNQNXUAg1B0IGnCEQEkQ2GgE1/yk0/1AhDq9QQgBPSSESDEAAEiESEkQ2GgE1/4ABAzT/UEIANoGDw/l4EkQ2GgE1/yg0/1CB/wGvUEIAHjYaAhc1BDYaAzYaARdJJQxAA2ZJIQQMQALbIQQSRCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSlcAIDX/VyAgNf4hBls1/SEHWzX8SCo1+yEIWzX6V1ggNfmBeFs1+FeAETX3gZEBWzX2V5kRNfWBqgFbNfRJNQU184AEv+H9eTTzULA08yJVSYECDEAB6kklDEABliUSRDTzI4GAAlg18jTySTXxIRNbNfA08Vc4IDXvMQA07xI08VcAIDTxVyAIUDTxVygIUDTwFlA071A08VdYIFA08VeYCFA08VegYFABNPFXeCASEDT0NPAPEEQ08IEeHYFkl0k17iMINPAMRDTwNO4JNe009zT1NPQ07QkWXABcADXssSKyATTtshIhBLIQMQCyFDT9shGzNOxXABE16ys0/BZQAzXpMgp4NegyCmA06AkWNeexIrIBNO6yEiEEshA06bIUNP2yEbYisgEhCbIQNPyyGIAE4QjIabIaNO807hZQsho0/bIwNPmyHDTvshw0+rIyszIKYDToCTTnFwkWtwE+VwQAUDXqgAgAAAAAAAAHIjTqULA06kk16SJbNeg06VcICTXnIjToEkSACAAAAAAAAAcwNPE07RZQKVA051cAAVA051cBCFA07hZQULA08TTtFlApUDTnVwABUDTnVwEIUDTuFlA1BzT/NP40/TT8NPs0+jT5NPgjCDIGNOw060kiWzTuCRZcAFwANPY06AhCA0VINPNXAQg18jTyFzXxNPE0/YgEUTEANP4SRIAJAAAAAAAABiEBsCk1BzT/NP40/TT8NPs0+jT5NPgyBjT3NPU09DTxCBZcAFwANPZCAvdJIwxAAENINPNXAQg18jTyFzXxNPGIA+cxADT+EkSACQAAAAAAAAVRAbApNQc0/zT+NP00/DT7NPo0+TT4MgY09zT2NPEIQgKuSDEANP4SRIAJAAAAAAAABIEBsCk1BzT/NP40/TT8NPs0+jT5NPgyBjT3NPZCAn9IJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQZbNf5JNQU1/YAEyJoPuzT9ULCACAAAAAAAAAdbsCo1B7EisgE0AyEHW7III7IQNP+yB7OxIrIBNAMhCFuyEiEEshA0/7IUNP6yEbOxIrIBIrISIQSyEDIJshUyCrIUNP6yEbNCApdJIwxAAUYjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/yEGWzX+IQdbNf0hCFs1/IFYWzX7V2ARNfqABJqLkXSwNP6IArg0+lcAETX5NP00/IgCwjT/MQASRCo1+Cs0+xZQAzX2Mgp4NfUyCmA09QkWNfSxIrIBIQmyEDT7shiABBPRbdWyGrMyCmA09Qk09BcJFrcAPlcEAFA194AIAAAAAAAAA34091CwNPdJNfYiWzX1IjT1EkQrNPsWUAM18zIKeDXyMgpgNPIJFjXxsSKyASEJshA0+7IYgATjctnmshqzMgpgNPIJNPEXCRa3AD5XBABQNfSACAAAAAAAAAOLNPRQsDT0STXzIls18iI08hJENP80A1cgIDT8NPs0+DT2IQVbNPNXCCAiMgY0+jT5SSJbNP0IFlwAXAA0/jT1CDTyCEIAr0ghFIgBsSI0ARJENARJIhJMNAISEURJNQVJSklXACA1/4EgWzX+gShbNf0hE1s1/IE4WzX7gAQKYzn8NP9QNP4WUDT9FlA0/BZQNPsWULCBEa9JNfpJVwARIQWvXABcADX5IRSIAVCxIrIBIrISIQSyEDIKshQ0/LIRszT+Ig00/SINEEQxADT/UDT+FlA0/RZQNPwWUDT7FlA0+VAoSwFXAHFnSCM1ATIGNQJCALc1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP5XABFJNfQiWyINQQBONP5XABFJNfMiWzXyNPU09lA09xZQNPgWUDT5UDT6FlA0+1A0/BZQNP5QNP8WUDTzUDTyFlAoSwFXAH9nKUsBV38zZ0gkNQEyBjUCQgBENPQiWzXzNPU09lA09xZQNP8WUDTzFlAoSwFXAFhnSCU1ATIGNQJCABsxGSQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 178,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/Server.rsh:64:59:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/Server.rsh:65:55:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 4 calls a remote object at /app/Server.rsh:126:60:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
export const _stateSourceMap = {
  1: {
    at: './Server.rsh:60:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './Server.rsh:130:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './Server.rsh:135:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './Server.rsh:71:60:after expr stmt semicolon',
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
