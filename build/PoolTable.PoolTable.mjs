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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Data({
    None: ctc8,
    Some: ctc2
    });
  const ctc10 = stdlib.T_Data({
    None: ctc8,
    Some: ctc8
    });
  const map0_ctc = ctc9;
  
  const map1_ctc = ctc10;
  
  
  const PoolView_SeeAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v617, v618, v619, v624, v625] = svs;
      return (await ((async () => {
        
        
        return v618;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v618, v619, v625, v648, v649] = svs;
      return (await ((async () => {
        
        
        return v618;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const PoolView_SetCompanion = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v617, v618, v619, v624, v625] = svs;
      return (await ((async () => {
        
        const v626 = await ctc.getContractCompanion();
        const v627 = await ctc.getContractInfo();
        const v628 = stdlib.fromSome(v626, v627);
        
        return v628;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v618, v619, v625, v648, v649] = svs;
      return (await ((async () => {
        
        const v626 = await ctc.getContractCompanion();
        const v627 = await ctc.getContractInfo();
        const v628 = stdlib.fromSome(v626, v627);
        
        return v628;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      PoolView: {
        SeeAddress: {
          decode: PoolView_SeeAddress,
          dom: [],
          rng: ctc0
          },
        SetCompanion: {
          decode: PoolView_SetCompanion,
          dom: [],
          rng: ctc7
          }
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc5, ctc6],
      4: [ctc0, ctc1, ctc6, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function _Pot_close4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Pot_close4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Pot_close4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc7]);
  const ctc11 = stdlib.T_Struct([['Address', ctc4], ['Stake', ctc1]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Data({
    Pot_close0_58: ctc10,
    Pot_optIn0_58: ctc10,
    Pot_put0_58: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v618, v619, v625, v648, v649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc9, ctc1]);
  const v671 = ctc.selfAddress();
  const v673 = stdlib.protect(ctc10, await interact.in(), {
    at: './PoolTable.rsh:1:23:application',
    fs: ['at ./PoolTable.rsh:76:7:application call to [unknown function] (defined at: ./PoolTable.rsh:76:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to "runPot_close0_58" (defined at: ./PoolTable.rsh:75:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to [unknown function] (defined at: ./PoolTable.rsh:37:30:function exp)'],
    msg: 'in',
    who: 'Pot_close'
    });
  const v677 = stdlib.addressEq(v671, v618);
  stdlib.assert(v677, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./PoolTable.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./PoolTable.rsh:76:22:application call to "isAdmin" (defined at: ./PoolTable.rsh:42:27:function exp)', 'at ./PoolTable.rsh:76:7:application call to [unknown function] (defined at: ./PoolTable.rsh:76:12:function exp)', 'at ./PoolTable.rsh:76:7:application call to [unknown function] (defined at: ./PoolTable.rsh:76:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to "runPot_close0_58" (defined at: ./PoolTable.rsh:75:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to [unknown function] (defined at: ./PoolTable.rsh:37:30:function exp)'],
    msg: 'You are not the admin',
    who: 'Pot_close'
    });
  const v682 = ['Pot_close0_58', v673];
  
  const txn1 = await (ctc.sendrecv({
    args: [v618, v619, v625, v648, v649, v682],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./PoolTable.rsh:77:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./PoolTable.rsh:77:19:decimal', stdlib.UInt_max, '0'), v619]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v722], secs: v724, time: v723, didSend: v320, from: v721 } = txn1;
      
      switch (v722[0]) {
        case 'Pot_close0_58': {
          const v725 = v722[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Pot_close"
            });
          ;
          ;
          const v797 = v725[stdlib.checkedBigNumberify('./PoolTable.rsh:75:7:spread', stdlib.UInt_max, '0')];
          const v801 = await txn1.getOutput('Pot_close', 'v797', ctc7, v797);
          
          const v1721 = v648;
          const v1722 = v649;
          if (v797) {
            sim_r.isHalt = false;
            }
          else {
            const v1723 = v648[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
            const v1724 = v1723[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v618,
              tok: v619
              });
            sim_r.txns.push({
              kind: 'from',
              to: v618,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v619
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Pot_optIn0_58': {
          const v884 = v722[1];
          
          break;
          }
        case 'Pot_put0_58': {
          const v1043 = v722[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc9, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v722], secs: v724, time: v723, didSend: v320, from: v721 } = txn1;
  switch (v722[0]) {
    case 'Pot_close0_58': {
      const v725 = v722[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v797 = v725[stdlib.checkedBigNumberify('./PoolTable.rsh:75:7:spread', stdlib.UInt_max, '0')];
      const v799 = stdlib.addressEq(v721, v618);
      stdlib.assert(v799, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./PoolTable.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./PoolTable.rsh:79:16:application call to "isAdmin" (defined at: ./PoolTable.rsh:42:27:function exp)', 'at ./PoolTable.rsh:78:7:application call to [unknown function] (defined at: ./PoolTable.rsh:78:7:function exp)'],
        msg: 'You are not the admin',
        who: 'Pot_close'
        });
      const v801 = await txn1.getOutput('Pot_close', 'v797', ctc7, v797);
      if (v320) {
        stdlib.protect(ctc0, await interact.out(v725, v801), {
          at: './PoolTable.rsh:75:8:application',
          fs: ['at ./PoolTable.rsh:75:8:application call to [unknown function] (defined at: ./PoolTable.rsh:75:8:function exp)', 'at ./PoolTable.rsh:80:10:application call to "r" (defined at: ./PoolTable.rsh:78:7:function exp)', 'at ./PoolTable.rsh:78:7:application call to [unknown function] (defined at: ./PoolTable.rsh:78:7:function exp)'],
          msg: 'out',
          who: 'Pot_close'
          });
        }
      else {
        }
      
      const v1721 = v648;
      const v1722 = v649;
      if (v797) {
        return;
        }
      else {
        const v1723 = v648[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
        const v1724 = v1723[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Pot_optIn0_58': {
      const v884 = v722[1];
      return;
      break;
      }
    case 'Pot_put0_58': {
      const v1043 = v722[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Pot_optIn4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Pot_optIn4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Pot_optIn4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc7]);
  const ctc11 = stdlib.T_Struct([['Address', ctc4], ['Stake', ctc1]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Data({
    Pot_close0_58: ctc10,
    Pot_optIn0_58: ctc10,
    Pot_put0_58: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v618, v619, v625, v648, v649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc9, ctc1]);
  const v686 = stdlib.protect(ctc10, await interact.in(), {
    at: './PoolTable.rsh:1:23:application',
    fs: ['at ./PoolTable.rsh:85:7:application call to [unknown function] (defined at: ./PoolTable.rsh:85:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to "runPot_optIn0_58" (defined at: ./PoolTable.rsh:84:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to [unknown function] (defined at: ./PoolTable.rsh:37:30:function exp)'],
    msg: 'in',
    who: 'Pot_optIn'
    });
  const v694 = ['Pot_optIn0_58', v686];
  
  const txn1 = await (ctc.sendrecv({
    args: [v618, v619, v625, v648, v649, v694],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./PoolTable.rsh:86:16:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./PoolTable.rsh:86:19:decimal', stdlib.UInt_max, '0'), v619]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v722], secs: v724, time: v723, didSend: v320, from: v721 } = txn1;
      
      switch (v722[0]) {
        case 'Pot_close0_58': {
          const v725 = v722[1];
          
          break;
          }
        case 'Pot_optIn0_58': {
          const v884 = v722[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Pot_optIn"
            });
          ;
          ;
          const v969 = v884[stdlib.checkedBigNumberify('./PoolTable.rsh:84:7:spread', stdlib.UInt_max, '0')];
          const v972 = await txn1.getOutput('Pot_optIn', 'v969', ctc7, v969);
          
          const v1751 = v648;
          const v1752 = v649;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Pot_put0_58': {
          const v1043 = v722[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc9, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v722], secs: v724, time: v723, didSend: v320, from: v721 } = txn1;
  switch (v722[0]) {
    case 'Pot_close0_58': {
      const v725 = v722[1];
      return;
      break;
      }
    case 'Pot_optIn0_58': {
      const v884 = v722[1];
      undefined /* setApiDetails */;
      ;
      ;
      const v969 = v884[stdlib.checkedBigNumberify('./PoolTable.rsh:84:7:spread', stdlib.UInt_max, '0')];
      const v972 = await txn1.getOutput('Pot_optIn', 'v969', ctc7, v969);
      if (v320) {
        stdlib.protect(ctc0, await interact.out(v884, v972), {
          at: './PoolTable.rsh:84:8:application',
          fs: ['at ./PoolTable.rsh:84:8:application call to [unknown function] (defined at: ./PoolTable.rsh:84:8:function exp)', 'at ./PoolTable.rsh:89:10:application call to "r" (defined at: ./PoolTable.rsh:87:7:function exp)', 'at ./PoolTable.rsh:87:7:application call to [unknown function] (defined at: ./PoolTable.rsh:87:7:function exp)'],
          msg: 'out',
          who: 'Pot_optIn'
          });
        }
      else {
        }
      
      const v1751 = v648;
      const v1752 = v649;
      return;
      
      break;
      }
    case 'Pot_put0_58': {
      const v1043 = v722[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Pot_put4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Pot_put4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Pot_put4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Struct([['Address', ctc4], ['Stake', ctc1]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc7]);
  const ctc13 = stdlib.T_Data({
    Pot_close0_58: ctc12,
    Pot_optIn0_58: ctc12,
    Pot_put0_58: ctc11
    });
  const ctc14 = stdlib.T_Tuple([ctc7, ctc1]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v618, v619, v625, v648, v649] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc4, ctc5, ctc6, ctc9, ctc1]);
  const v655 = stdlib.protect(ctc11, await interact.in(), {
    at: './PoolTable.rsh:1:23:application',
    fs: ['at ./PoolTable.rsh:52:5:application call to [unknown function] (defined at: ./PoolTable.rsh:52:5:function exp)', 'at ./PoolTable.rsh:37:30:application call to "runPot_put0_58" (defined at: ./PoolTable.rsh:51:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to [unknown function] (defined at: ./PoolTable.rsh:37:30:function exp)'],
    msg: 'in',
    who: 'Pot_put'
    });
  const v656 = v655[stdlib.checkedBigNumberify('./PoolTable.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v658 = v656.Stake;
  const v662 = stdlib.gt(v658, stdlib.checkedBigNumberify('./PoolTable.rsh:40:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v662, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./PoolTable.rsh:40:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./PoolTable.rsh:52:18:application call to "isFee" (defined at: ./PoolTable.rsh:39:25:function exp)', 'at ./PoolTable.rsh:52:5:application call to [unknown function] (defined at: ./PoolTable.rsh:52:10:function exp)', 'at ./PoolTable.rsh:52:5:application call to [unknown function] (defined at: ./PoolTable.rsh:52:5:function exp)', 'at ./PoolTable.rsh:37:30:application call to "runPot_put0_58" (defined at: ./PoolTable.rsh:51:7:function exp)', 'at ./PoolTable.rsh:37:30:application call to [unknown function] (defined at: ./PoolTable.rsh:37:30:function exp)'],
    msg: 'You are not the admin',
    who: 'Pot_put'
    });
  const v669 = ['Pot_put0_58', v655];
  
  const txn1 = await (ctc.sendrecv({
    args: [v618, v619, v625, v648, v649, v669],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./PoolTable.rsh:55:15:decimal', stdlib.UInt_max, '0'), [[v658, v619]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v722], secs: v724, time: v723, didSend: v320, from: v721 } = txn1;
      
      switch (v722[0]) {
        case 'Pot_close0_58': {
          const v725 = v722[1];
          
          break;
          }
        case 'Pot_optIn0_58': {
          const v884 = v722[1];
          
          break;
          }
        case 'Pot_put0_58': {
          const v1043 = v722[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Pot_put"
            });
          const v1064 = v1043[stdlib.checkedBigNumberify('./PoolTable.rsh:51:7:spread', stdlib.UInt_max, '0')];
          const v1065 = v1064.Stake;
          ;
          const v1273 = v625[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '0')];
          const v1279 = stdlib.tokenEq(v1273, v619);
          const v1282 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v1283 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v1284 = v1279 ? v1283 : v1282;
          const v1091 = v1284[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '1')];
          const v1093 = v648[v1091];
          const v1094 = v1093[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '0')];
          const v1095 = stdlib.add(v1094, v1065);
          const v1112 = stdlib.Array_set(v1093, '0', v1095);
          const v1113 = stdlib.Array_set(v648, v1091, v1112);
          sim_r.txns.push({
            amt: v1065,
            kind: 'to',
            tok: v619
            });
          const v1145 = v1064.Address;
          const v1147 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1145), null);
          const v1148 = {
            None: 0,
            Some: 1
            }[v1147[0]];
          const v1149 = stdlib.eq(v1148, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v1149) {
            const v1150 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1145), null);
            const v1151 = stdlib.fromSome(v1150, stdlib.checkedBigNumberify('./PoolTable.rsh:62:44:decimal', stdlib.UInt_max, '0'));
            const v1152 = stdlib.safeAdd(v1151, v1065);
            await stdlib.simMapSet(sim_r, 0, v1145, v1152);
            const v1155 = v1113[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
            const v1156 = v1155[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
            const v1160 = stdlib.sub(v1156, v1065);
            const v1162 = stdlib.Array_set(v1155, '0', v1160);
            const v1163 = stdlib.Array_set(v1113, stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0'), v1162);
            sim_r.txns.push({
              kind: 'from',
              to: v618,
              tok: v619
              });
            const v1165 = [true, v1152];
            const v1166 = await txn1.getOutput('Pot_put', 'v1165', ctc14, v1165);
            
            const v1781 = v1163;
            const v1782 = v649;
            sim_r.isHalt = false;
            }
          else {
            await stdlib.simMapSet(sim_r, 1, v1145, null);
            await stdlib.simMapSet(sim_r, 0, v1145, v1065);
            const v1180 = v1113[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
            const v1181 = v1180[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
            const v1185 = stdlib.sub(v1181, v1065);
            const v1187 = stdlib.Array_set(v1180, '0', v1185);
            const v1188 = stdlib.Array_set(v1113, stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0'), v1187);
            sim_r.txns.push({
              kind: 'from',
              to: v618,
              tok: v619
              });
            const v1190 = [true, v1065];
            const v1191 = await txn1.getOutput('Pot_put', 'v1190', ctc14, v1190);
            
            const v1787 = v1188;
            const v1788 = v649;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc9, ctc1, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v722], secs: v724, time: v723, didSend: v320, from: v721 } = txn1;
  switch (v722[0]) {
    case 'Pot_close0_58': {
      const v725 = v722[1];
      return;
      break;
      }
    case 'Pot_optIn0_58': {
      const v884 = v722[1];
      return;
      break;
      }
    case 'Pot_put0_58': {
      const v1043 = v722[1];
      undefined /* setApiDetails */;
      const v1064 = v1043[stdlib.checkedBigNumberify('./PoolTable.rsh:51:7:spread', stdlib.UInt_max, '0')];
      const v1065 = v1064.Stake;
      ;
      const v1273 = v625[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '0')];
      const v1279 = stdlib.tokenEq(v1273, v619);
      const v1282 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v1283 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v1284 = v1279 ? v1283 : v1282;
      const v1091 = v1284[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '1')];
      const v1093 = v648[v1091];
      const v1094 = v1093[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '0')];
      const v1095 = stdlib.add(v1094, v1065);
      const v1112 = stdlib.Array_set(v1093, '0', v1095);
      const v1113 = stdlib.Array_set(v648, v1091, v1112);
      ;
      const v1143 = stdlib.gt(v1065, stdlib.checkedBigNumberify('./PoolTable.rsh:40:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1143, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./PoolTable.rsh:40:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./PoolTable.rsh:58:12:application call to "isFee" (defined at: ./PoolTable.rsh:39:25:function exp)', 'at ./PoolTable.rsh:57:5:application call to [unknown function] (defined at: ./PoolTable.rsh:57:5:function exp)'],
        msg: 'You are not the admin',
        who: 'Pot_put'
        });
      const v1145 = v1064.Address;
      const v1147 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1145), null);
      const v1148 = {
        None: 0,
        Some: 1
        }[v1147[0]];
      const v1149 = stdlib.eq(v1148, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v1149) {
        const v1150 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1145), null);
        const v1151 = stdlib.fromSome(v1150, stdlib.checkedBigNumberify('./PoolTable.rsh:62:44:decimal', stdlib.UInt_max, '0'));
        const v1152 = stdlib.safeAdd(v1151, v1065);
        await stdlib.mapSet(map0, v1145, v1152);
        const v1155 = v1113[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
        const v1156 = v1155[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
        const v1160 = stdlib.sub(v1156, v1065);
        const v1162 = stdlib.Array_set(v1155, '0', v1160);
        const v1163 = stdlib.Array_set(v1113, stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0'), v1162);
        ;
        const v1165 = [true, v1152];
        const v1166 = await txn1.getOutput('Pot_put', 'v1165', ctc14, v1165);
        if (v320) {
          stdlib.protect(ctc0, await interact.out(v1043, v1166), {
            at: './PoolTable.rsh:51:8:application',
            fs: ['at ./PoolTable.rsh:51:8:application call to [unknown function] (defined at: ./PoolTable.rsh:51:8:function exp)', 'at ./PoolTable.rsh:72:8:application call to "r" (defined at: ./PoolTable.rsh:57:5:function exp)', 'at ./PoolTable.rsh:57:5:application call to [unknown function] (defined at: ./PoolTable.rsh:57:5:function exp)'],
            msg: 'out',
            who: 'Pot_put'
            });
          }
        else {
          }
        
        const v1781 = v1163;
        const v1782 = v649;
        return;
        }
      else {
        await stdlib.mapSet(map1, v1145, null);
        await stdlib.mapSet(map0, v1145, v1065);
        const v1180 = v1113[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
        const v1181 = v1180[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
        const v1185 = stdlib.sub(v1181, v1065);
        const v1187 = stdlib.Array_set(v1180, '0', v1185);
        const v1188 = stdlib.Array_set(v1113, stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0'), v1187);
        ;
        const v1190 = [true, v1065];
        const v1191 = await txn1.getOutput('Pot_put', 'v1190', ctc14, v1190);
        if (v320) {
          stdlib.protect(ctc0, await interact.out(v1043, v1191), {
            at: './PoolTable.rsh:51:8:application',
            fs: ['at ./PoolTable.rsh:51:8:application call to [unknown function] (defined at: ./PoolTable.rsh:51:8:function exp)', 'at ./PoolTable.rsh:72:8:application call to "r" (defined at: ./PoolTable.rsh:57:5:function exp)', 'at ./PoolTable.rsh:57:5:application call to [unknown function] (defined at: ./PoolTable.rsh:57:5:function exp)'],
            msg: 'out',
            who: 'Pot_put'
            });
          }
        else {
          }
        
        const v1787 = v1188;
        const v1788 = v649;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Referee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Referee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Referee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Struct([['Address', ctc5], ['Stake', ctc1]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    Pot_close0_58: ctc7,
    Pot_optIn0_58: ctc7,
    Pot_put0_58: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc14 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v609 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v610 = [v609];
  const v611 = [stdlib.Token_zero];
  const v614 = ctc.selfAddress();
  const v616 = stdlib.protect(ctc4, await interact.getToken(), {
    at: './PoolTable.rsh:23:48:application',
    fs: ['at ./PoolTable.rsh:21:13:application call to [unknown function] (defined at: ./PoolTable.rsh:21:16:function exp)'],
    msg: 'getToken',
    who: 'Referee'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v614, v616],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc4],
    pay: [stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v618, v619], secs: v621, time: v620, didSend: v29, from: v617 } = txn1;
      
      const v622 = v610[stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0')];
      const v623 = stdlib.Array_set(v622, '0', stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0'));
      const v624 = stdlib.Array_set(v610, stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0'), v623);
      const v625 = stdlib.Array_set(v611, stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0'), v619);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v619
        });
      ;
      const v629 = await ctc.getContractInfo();
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v618, v619], secs: v621, time: v620, didSend: v29, from: v617 } = txn1;
  const v622 = v610[stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0')];
  const v623 = stdlib.Array_set(v622, '0', stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0'));
  const v624 = stdlib.Array_set(v610, stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0'), v623);
  const v625 = stdlib.Array_set(v611, stdlib.checkedBigNumberify('./PoolTable.rsh:25:9:dot', stdlib.UInt_max, '0'), v619);
  ;
  ;
  const v629 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.getCmp(v629), {
    at: './PoolTable.rsh:32:24:application',
    fs: ['at ./PoolTable.rsh:32:24:application call to [unknown function] (defined at: ./PoolTable.rsh:32:24:function exp)', 'at ./PoolTable.rsh:32:24:application call to "liftedInteract" (defined at: ./PoolTable.rsh:32:24:application)'],
    msg: 'getCmp',
    who: 'Referee'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v617, v618, v619, v624, v625],
    evt_cnt: 0,
    funcNum: 1,
    lct: v620,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./PoolTable.rsh:34:14:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./PoolTable.rsh:34:17:decimal', stdlib.UInt_max, '1000000'), v619]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v633, time: v632, didSend: v47, from: v631 } = txn2;
      
      ;
      const v634 = v624[stdlib.checkedBigNumberify('./PoolTable.rsh:34:9:dot', stdlib.UInt_max, '0')];
      const v635 = v634[stdlib.checkedBigNumberify('./PoolTable.rsh:34:9:dot', stdlib.UInt_max, '0')];
      const v636 = stdlib.add(v635, stdlib.checkedBigNumberify('./PoolTable.rsh:34:17:decimal', stdlib.UInt_max, '1000000'));
      const v638 = stdlib.Array_set(v634, '0', v636);
      const v639 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./PoolTable.rsh:34:9:dot', stdlib.UInt_max, '0'), v638);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./PoolTable.rsh:34:17:decimal', stdlib.UInt_max, '1000000'),
        kind: 'to',
        tok: v619
        });
      const v641 = true;
      const v642 = v632;
      const v648 = v639;
      const v649 = stdlib.checkedBigNumberify('./PoolTable.rsh:20:1:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v641;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1202 = v648[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
        const v1203 = v1202[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v618,
          tok: v619
          });
        sim_r.txns.push({
          kind: 'from',
          to: v618,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v619
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc5, ctc4, ctc13, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v633, time: v632, didSend: v47, from: v631 } = txn2;
  ;
  const v634 = v624[stdlib.checkedBigNumberify('./PoolTable.rsh:34:9:dot', stdlib.UInt_max, '0')];
  const v635 = v634[stdlib.checkedBigNumberify('./PoolTable.rsh:34:9:dot', stdlib.UInt_max, '0')];
  const v636 = stdlib.add(v635, stdlib.checkedBigNumberify('./PoolTable.rsh:34:17:decimal', stdlib.UInt_max, '1000000'));
  const v638 = stdlib.Array_set(v634, '0', v636);
  const v639 = stdlib.Array_set(v624, stdlib.checkedBigNumberify('./PoolTable.rsh:34:9:dot', stdlib.UInt_max, '0'), v638);
  ;
  const v640 = stdlib.addressEq(v617, v631);
  stdlib.assert(v640, {
    at: './PoolTable.rsh:34:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Referee'
    });
  let v641 = true;
  let v642 = v632;
  let v648 = v639;
  let v649 = stdlib.checkedBigNumberify('./PoolTable.rsh:20:1:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    
    return v641;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v722], secs: v724, time: v723, didSend: v320, from: v721 } = txn4;
    switch (v722[0]) {
      case 'Pot_close0_58': {
        const v725 = v722[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v797 = v725[stdlib.checkedBigNumberify('./PoolTable.rsh:75:7:spread', stdlib.UInt_max, '0')];
        const v799 = stdlib.addressEq(v721, v618);
        stdlib.assert(v799, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./PoolTable.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./PoolTable.rsh:79:16:application call to "isAdmin" (defined at: ./PoolTable.rsh:42:27:function exp)', 'at ./PoolTable.rsh:78:7:application call to [unknown function] (defined at: ./PoolTable.rsh:78:7:function exp)'],
          msg: 'You are not the admin',
          who: 'Referee'
          });
        await txn4.getOutput('Pot_close', 'v797', ctc6, v797);
        const cv641 = v797;
        const cv642 = v723;
        const cv648 = v648;
        const cv649 = v649;
        
        v641 = cv641;
        v642 = cv642;
        v648 = cv648;
        v649 = cv649;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Pot_optIn0_58': {
        const v884 = v722[1];
        undefined /* setApiDetails */;
        ;
        ;
        const v969 = v884[stdlib.checkedBigNumberify('./PoolTable.rsh:84:7:spread', stdlib.UInt_max, '0')];
        await txn4.getOutput('Pot_optIn', 'v969', ctc6, v969);
        const cv641 = true;
        const cv642 = v723;
        const cv648 = v648;
        const cv649 = v649;
        
        v641 = cv641;
        v642 = cv642;
        v648 = cv648;
        v649 = cv649;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Pot_put0_58': {
        const v1043 = v722[1];
        undefined /* setApiDetails */;
        const v1064 = v1043[stdlib.checkedBigNumberify('./PoolTable.rsh:51:7:spread', stdlib.UInt_max, '0')];
        const v1065 = v1064.Stake;
        ;
        const v1273 = v625[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '0')];
        const v1279 = stdlib.tokenEq(v1273, v619);
        const v1282 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v1283 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1284 = v1279 ? v1283 : v1282;
        const v1091 = v1284[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '1')];
        const v1093 = v648[v1091];
        const v1094 = v1093[stdlib.checkedBigNumberify('./PoolTable.rsh:37:30:dot', stdlib.UInt_max, '0')];
        const v1095 = stdlib.add(v1094, v1065);
        const v1112 = stdlib.Array_set(v1093, '0', v1095);
        const v1113 = stdlib.Array_set(v648, v1091, v1112);
        ;
        const v1143 = stdlib.gt(v1065, stdlib.checkedBigNumberify('./PoolTable.rsh:40:19:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v1143, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./PoolTable.rsh:40:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./PoolTable.rsh:58:12:application call to "isFee" (defined at: ./PoolTable.rsh:39:25:function exp)', 'at ./PoolTable.rsh:57:5:application call to [unknown function] (defined at: ./PoolTable.rsh:57:5:function exp)'],
          msg: 'You are not the admin',
          who: 'Referee'
          });
        const v1145 = v1064.Address;
        const v1147 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1145), null);
        const v1148 = {
          None: 0,
          Some: 1
          }[v1147[0]];
        const v1149 = stdlib.eq(v1148, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v1149) {
          const v1150 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1145), null);
          const v1151 = stdlib.fromSome(v1150, stdlib.checkedBigNumberify('./PoolTable.rsh:62:44:decimal', stdlib.UInt_max, '0'));
          const v1152 = stdlib.safeAdd(v1151, v1065);
          await stdlib.mapSet(map0, v1145, v1152);
          const v1155 = v1113[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
          const v1156 = v1155[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
          const v1160 = stdlib.sub(v1156, v1065);
          const v1162 = stdlib.Array_set(v1155, '0', v1160);
          const v1163 = stdlib.Array_set(v1113, stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0'), v1162);
          ;
          stdlib.protect(ctc0, await interact.call(true, v1065, v1145), {
            at: './PoolTable.rsh:71:28:application',
            fs: ['at ./PoolTable.rsh:71:28:application call to [unknown function] (defined at: ./PoolTable.rsh:71:28:function exp)', 'at ./PoolTable.rsh:71:28:application call to "liftedInteract" (defined at: ./PoolTable.rsh:71:28:application)', 'at ./PoolTable.rsh:57:5:application call to [unknown function] (defined at: ./PoolTable.rsh:57:5:function exp)'],
            msg: 'call',
            who: 'Referee'
            });
          
          const v1165 = [true, v1152];
          await txn4.getOutput('Pot_put', 'v1165', ctc11, v1165);
          const cv641 = true;
          const cv642 = v723;
          const cv648 = v1163;
          const cv649 = v649;
          
          v641 = cv641;
          v642 = cv642;
          v648 = cv648;
          v649 = cv649;
          
          txn3 = txn4;
          continue;}
        else {
          await stdlib.mapSet(map1, v1145, null);
          await stdlib.mapSet(map0, v1145, v1065);
          const v1180 = v1113[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
          const v1181 = v1180[stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0')];
          const v1185 = stdlib.sub(v1181, v1065);
          const v1187 = stdlib.Array_set(v1180, '0', v1185);
          const v1188 = stdlib.Array_set(v1113, stdlib.checkedBigNumberify('./PoolTable.rsh:70:30:application', stdlib.UInt_max, '0'), v1187);
          ;
          stdlib.protect(ctc0, await interact.call(true, v1065, v1145), {
            at: './PoolTable.rsh:71:28:application',
            fs: ['at ./PoolTable.rsh:71:28:application call to [unknown function] (defined at: ./PoolTable.rsh:71:28:function exp)', 'at ./PoolTable.rsh:71:28:application call to "liftedInteract" (defined at: ./PoolTable.rsh:71:28:application)', 'at ./PoolTable.rsh:57:5:application call to [unknown function] (defined at: ./PoolTable.rsh:57:5:function exp)'],
            msg: 'call',
            who: 'Referee'
            });
          
          const v1190 = [true, v1065];
          await txn4.getOutput('Pot_put', 'v1190', ctc11, v1190);
          const cv641 = true;
          const cv642 = v723;
          const cv648 = v1188;
          const cv649 = v649;
          
          v641 = cv641;
          v642 = cv642;
          v648 = cv648;
          v649 = cv649;
          
          txn3 = txn4;
          continue;}
        break;
        }
      }
    
    }
  const v1202 = v648[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
  const v1203 = v1202[stdlib.checkedBigNumberify('./PoolTable.rsh:94:11:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function Pot_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pot_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pot_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Pot_close4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Pot_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pot_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pot_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Pot_optIn4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Pot_put(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pot_put expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pot_put expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Pot_put4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Pot_close(byte)byte`, `Pot_optIn(byte)byte`, `Pot_put((address,uint64))(byte,uint64)`],
    pure: [`PoolView_SeeAddress()address`, `PoolView_SetCompanion()uint64`],
    sigs: [`PoolView_SeeAddress()address`, `PoolView_SetCompanion()uint64`, `Pot_close(byte)byte`, `Pot_optIn(byte)byte`, `Pot_put((address,uint64))(byte,uint64)`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
  appApproval: `ByARAAEEEQggAgrFv5+cDOmQo4gO5rPLmw4nzN2KqAQJA8CEPaCNBiYDAQABAQAiNQAxGEEE0SpkSSJbNQEhBFs1AjEZIxJBAAoxACghB69mQgSdNhoAF0lBAMgiNQQjNQZJIQgMQABgSSEJDEAARUkhCgxAACwhChJENAFJJAxAABAkEkQoZEk1A1cAIDUHQgRtIxJEKGRJNQNXICA1B0IEXSEJEkQ2GgE1/4ABAjT/UEIAjSEIEkQ2GgE1/yk0/1AhC69QQgB5SSEMDEAAFCEMEkQ2GgE1/yg0/1AhC69QQgBegdXbxZ4BEkQ0AUkkDEAAGCQSRDEYIQ2vSTX/I1s0/yJVTRY1B0ID9CMSRDEYIQ2vSTX/I1s0/yJVTRY1B0ID3DYaAhc1BDYaAzYaARdJIwxAAoJJIQ4MQAIYIQ4SRCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf5XKAg1/VcwETX8gUFbNftJNQU1+oAEUX8cODT6ULA0+iJVSSMMQAGMSSEGDEABWyEGEkQ0+lcBKDX5NPlJNfghBVs194AJAAAAAAAAAAABgAkBAAAAAAAAAAA0/SJbNP4STSNbNfY0/CU09gslWDX1NPw09iULNPVJIls09wgWXABdNfQ09zT+iANeNPciDUQ0+FcAIDXzNPOIAyZXCQEiVSMSQQB4IjTziAMWVwAJSTXxI1s08SJVTTT3CDXyNPMoNPOIAvwpNPIWUFwAZjT0VwARNfGxIrIBNPeyEiSyEDT/shQ0/rIRs4AIAAAAAAAABI0pNPIWUFCwKTTyFlA1BzT/NP40/SMyBjT0NPFJIls09wkWXABcADT7QgG+NPMoNPOIApwpXAlmNPMoNPOIApApNPcWUFwAZjT0VwARNfKxIrIBNPeyEiSyEDT/shQ0/rIRs4AIAAAAAAAABKYpNPcWUFCwKTT3FlA1BzT/NP40/SMyBjT0NPJJIls09wkWXABcADT7QgFSSDT6VwEBNfmACAAAAAAAAAPJNPlQsDT5NQc0/zT+NP0jMgY0/DT7QgEoSDT6VwEBNfk0+Rc1+DEANP8SRIAIAAAAAAAAAx00+BZRBwhQsDT4FlEHCDUHNP80/jT9NPgyBjT8NPtCAOojEkQjNAESRDQESSISTDQCEhFEKGRJNQNJgUBbNf9XSBE1/oAEmouRdLA0/lcAETX9IQ80/4gBvzQDVwAgMQASRDQDVyAgNP80A1dZCCMyBjT+NP1JIlshDwgWXABcACJCAIdIIRCIAXYiNAESRDQESSISTDQCEhFESTUFSVcAIDX/IQVbNf6ABNnpsco0/1A0/hZQsCWvSTX9SVcAESEEr1wAXAA1/CEErzT+FlwANfshEIgBKbEisgEishIkshAyCrIUNP6yEbMxADT/UDT+FlA0/FA0+1AoSwFXAGFnSCM1ATIGNQJCAJQ1/zX+Nf01/DX7Nfo1+TT8QQAiNPk0+hZQNPtQNP5QNP8WUChLAVcASWdIJDUBMgY1AkIAX7EisgE0/lcAESJbshIkshA0+bIUNPqyEbOxIrIBNP+yCCOyEDT5sgezsSKyASKyEiSyEDIJshUyCrIUNPqyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQeviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 11,
  warnings: []
  };
export const _stateSourceMap = {
  1: {
    at: './PoolTable.rsh:33:1:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './PoolTable.rsh:98:1:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './PoolTable.rsh:37:30:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO
  };
export const _Participants = {
  "Pot_close": Pot_close,
  "Pot_optIn": Pot_optIn,
  "Pot_put": Pot_put,
  "Referee": Referee
  };
export const _APIs = {
  Pot: {
    close: Pot_close,
    optIn: Pot_optIn,
    put: Pot_put
    }
  };
