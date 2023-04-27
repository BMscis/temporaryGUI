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
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc2]
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
export async function User(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc4 = stdlib.T_Struct([['AssetName', ctc0], ['AssetSymbol', ctc1], ['AssetType', ctc2], ['AssetValue', ctc2], ['ExtCID', ctc3]]);
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc6]);
  const ctc8 = stdlib.T_Struct([['AssetName', ctc0], ['AssetSymbol', ctc1], ['AssetType', ctc2], ['AssetValue', ctc2], ['OwnerAddress', ctc6], ['AdminAddress', ctc6], ['Time', ctc2], ['ExtCID', ctc3]]);
  const ctc9 = stdlib.T_Digest;
  const ctc10 = stdlib.T_Struct([['AssetName', ctc0], ['AssetSymbol', ctc1], ['AssetType', ctc2], ['AssetValue', ctc2], ['OwnerAddress', ctc6], ['AdminAddress', ctc6], ['Hash', ctc9], ['Time', ctc2], ['ExtCID', ctc3]]);
  const ctc11 = stdlib.T_Null;
  
  
  const v103 = stdlib.protect(ctc4, interact.tokenize, 'for User\'s interact field tokenize');
  const v104 = v103.AssetName;
  const v105 = v103.AssetSymbol;
  const v106 = v103.AssetType;
  const v107 = v103.AssetValue;
  const v108 = v103.ExtCID;
  
  const v109 = ctc.selfAddress();
  const v111 = stdlib.protect(ctc5, await interact.getAdmin(), {
    at: './Tokenize.rsh:26:55:application',
    fs: ['at ./Tokenize.rsh:25:14:application call to [unknown function] (defined at: ./Tokenize.rsh:25:18:function exp)'],
    msg: 'getAdmin',
    who: 'User'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v111, v109],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./Tokenize.rsh:27:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc6],
    pay: [stdlib.checkedBigNumberify('./Tokenize.rsh:27:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v113, v114], secs: v116, time: v115, didSend: v34, from: v112 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v113, v114], secs: v116, time: v115, didSend: v34, from: v112 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v112, v113],
    evt_cnt: 0,
    funcNum: 1,
    lct: v115,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./Tokenize.rsh:30:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v120, time: v119, didSend: v40, from: v118 } = txn2;
      
      ;
      const v124 = [];
      const v125 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v113,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./Tokenize.rsh:32:40:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./Tokenize.rsh:32:40:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc6.defaultValue /* simReturnVal */];})();
      const v126 = await txn2.getOutput('internal', 'v125', ctc7, v125);
      const v128 = v126[stdlib.checkedBigNumberify('./Tokenize.rsh:32:40:application', stdlib.UInt_max, '0')];
      const v129 = v126[stdlib.checkedBigNumberify('./Tokenize.rsh:32:40:application', stdlib.UInt_max, '1')];
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v120, time: v119, didSend: v40, from: v118 } = txn2;
  ;
  const v121 = stdlib.addressEq(v112, v118);
  stdlib.assert(v121, {
    at: './Tokenize.rsh:30:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  const v124 = [];
  const v125 = undefined /* Remote */;
  const v126 = await txn2.getOutput('internal', 'v125', ctc7, v125);
  const v128 = v126[stdlib.checkedBigNumberify('./Tokenize.rsh:32:40:application', stdlib.UInt_max, '0')];
  const v129 = v126[stdlib.checkedBigNumberify('./Tokenize.rsh:32:40:application', stdlib.UInt_max, '1')];
  const v134 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v128);
  stdlib.assert(v134, {
    at: './Tokenize.rsh:32:40:application',
    fs: [],
    msg: 'remote bill check',
    who: 'User'
    });
  const v142 = {
    AdminAddress: v129,
    AssetName: v104,
    AssetSymbol: v105,
    AssetType: v106,
    AssetValue: v107,
    ExtCID: v108,
    OwnerAddress: v114,
    Time: v115
    };
  const v143 = stdlib.digest([ctc8], [v142]);
  
  const v144 = {
    AdminAddress: v129,
    AssetName: v104,
    AssetSymbol: v105,
    AssetType: v106,
    AssetValue: v107,
    ExtCID: v108,
    Hash: v143,
    OwnerAddress: v114,
    Time: v115
    };
  
  const txn3 = await (ctc.sendrecv({
    args: [v112, v128, v144],
    evt_cnt: 1,
    funcNum: 2,
    lct: v119,
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./Tokenize.rsh:38:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v146], secs: v148, time: v147, didSend: v70, from: v145 } = txn3;
      
      ;
      
      sim_r.txns.push({
        kind: 'from',
        to: v112,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc2, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v70, from: v145 } = txn3;
  ;
  const v149 = stdlib.addressEq(v112, v145);
  stdlib.assert(v149, {
    at: './Tokenize.rsh:38:10:dot',
    fs: [],
    msg: 'sender correct',
    who: 'User'
    });
  stdlib.protect(ctc11, await interact.showWera(v146), {
    at: './Tokenize.rsh:40:27:application',
    fs: ['at ./Tokenize.rsh:40:27:application call to [unknown function] (defined at: ./Tokenize.rsh:40:27:function exp)', 'at ./Tokenize.rsh:40:27:application call to "liftedInteract" (defined at: ./Tokenize.rsh:40:27:application)'],
    msg: 'showWera',
    who: 'User'
    });
  
  ;
  stdlib.protect(ctc11, await interact.Done(), {
    at: './Tokenize.rsh:43:23:application',
    fs: ['at ./Tokenize.rsh:43:23:application call to [unknown function] (defined at: ./Tokenize.rsh:43:23:function exp)', 'at ./Tokenize.rsh:43:23:application call to "liftedInteract" (defined at: ./Tokenize.rsh:43:23:application)'],
    msg: 'Done',
    who: 'User'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAECICYCAQAAIjUAMRhBAbspZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQADySSQMQABHJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQU1/oAEdnGOfjT+ULA0/zEAEkSxIrIBNAMlW7III7IQNP+yB7NCAPBIIzQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABJqLkXSwNP8xABJEgAVhcHBJRDQDVyAIUAM1/TIKeDX8MgpgNPwJFjX7sSKyAYEGshA0AyVbshiABHzpleuyGrMyCmA0/Ak0+xcJFrcAPlcEAFA1/oAIAAAAAAAAAH00/lCwNP5JNf0iWzX8IjT8EkQ0/zT8FlAoSwFXAChnSCQ1ATIGNQJCAGdIgaCNBogAsCI0ARJENARJIhJMNAISEURJNQVJIls1/1cIIDX+gATpktLSNP8WUDT+ULAxADT/FlAoSwFXAChnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/Tokenize.rsh:32:40:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T0","name":"v195","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"AssetName","type":"bytes32"},{"internalType":"bytes8","name":"AssetSymbol","type":"bytes8"},{"internalType":"uint256","name":"AssetType","type":"uint256"},{"internalType":"uint256","name":"AssetValue","type":"uint256"},{"internalType":"address payable","name":"OwnerAddress","type":"address"},{"internalType":"address payable","name":"AdminAddress","type":"address"},{"internalType":"uint256","name":"Hash","type":"uint256"},{"internalType":"uint256","name":"Time","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T6","name":"ExtCID","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v125","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v197","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"AssetName","type":"bytes32"},{"internalType":"bytes8","name":"AssetSymbol","type":"bytes8"},{"internalType":"uint256","name":"AssetType","type":"uint256"},{"internalType":"uint256","name":"AssetValue","type":"uint256"},{"internalType":"address payable","name":"OwnerAddress","type":"address"},{"internalType":"address payable","name":"AdminAddress","type":"address"},{"internalType":"uint256","name":"Hash","type":"uint256"},{"internalType":"uint256","name":"Time","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T6","name":"ExtCID","type":"tuple"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"v199","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620010719081380391601f1980601f85011683019360018060401b0392848610848711176200033a578160609286926040988952833981010312620003505783519260608401848110848211176200033a578552805184526020936200007c866200006e87850162000355565b938784019485520162000355565b9486820195865243600355865191818301838110878211176200033a578852600080935260049060ff8254166200032357885133815281518482015285516001600160a01b03908116828c01529851891660608201527fe3c1faaa5917a9b861af24e0336c7c28112c2c3c6b4924997385bc7ffabf67a590608090a151801590811562000316575b5015620002ff5734620002e85787519388850185811088821117620002d5579088918a52838601958587523390525116845260019687845543885588519433848701525116888501528784526060840184811087821117620002c25788528351958611620002af57600254908782811c92168015620002a4575b83831014620002915750601f811162000245575b508093601f8611600114620001dd57505091839491849394620001d1575b50501b916000199060031b1c1916176002555b51610d0690816200036b8239f35b015192503880620001b0565b600283528183209493928692918316915b888383106200022a575050501062000210575b505050811b01600255620001c3565b015160001960f88460031b161c1916905538808062000201565b858701518855909601959485019487935090810190620001ee565b60028352818320601f870160051c81019183881062000286575b601f0160051c019087905b8281106200027a57505062000192565b8481550187906200026a565b90915081906200025f565b634e487b7160e01b845260229052602483fd5b91607f16916200017e565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b855260418352602485fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b9050600154143862000104565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b51906001600160a01b0382168203620003505756fe60806040526004361015610018575b361561001657005b005b6000803560e01c9081631e93b0f11461007f57508063573b851014610076578063832307571461006d578063ab53f2c6146100645763d4af66250361000e5761005f6103b4565b61000e565b5061005f610342565b5061005f610323565b5061005f61009e565b3461009b578060031936011261009b5760035460805260206080f35b80fd5b5060208060031936011261031e57610308604091600083516100bf816104be565b526103038351916100cf836104be565b60043583526100dc610608565b6100f76100f26100ee60045460ff1690565b1590565b610854565b8551338152845160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159690604090a1610137600160005414610874565b610165610153610145610524565b848082518301019101610676565b94518015908115610312575b50610894565b61016f34156108b4565b61018b3360018060a01b036101848751610659565b16146108d4565b7f43566406305c0d53a342954c8e7cdde2e69dbe7131eef196677606fb856f3abf6102898747606085019081526101ca600160ff196004541617600455565b61025c610249600080898c826102066102018a51948086019463076fede360e41b8652600487526101fa876104e6565b0151610659565b610659565b9251925af19261021e6102176106b0565b80956109b4565b5061022e60ff1960045416600455565b479051900392888801938451528880825183010191016106fd565b82516001600160a01b0390911690880152565b5193018381528851845181526020948501516001600160a01b031694810194909452929081906040820190565b0390a1610298815151156108f4565b6102ba6102ad6102a66105ef565b9551610659565b6001600160a01b03168552565b5151818401526102ca6002600055565b6102d343600155565b845183516001600160a01b0316918101918252602093840151848301529081900392830181529160400182610501565b610771565b5160008152602090f35b9050600154143861015f565b600080fd5b503461031e57600036600319011261031e576020600154604051908152f35b503461031e5760008060031936011261009b57805461035f610524565b906040519283918252602090604082840152835191826040850152815b83811061039d57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161037c565b5061018036600319011261031e5760006040516103d0816104be565b526040516103dd816104e6565b600435815261016036602319011261031e57610461906103fb6105cf565b60243581526104086109e4565b6020820152606435604082015260843560608201526104256109fb565b6080820152610432610a08565b60a082015260e43560c08201526101043560e082015261045136610a15565b6101008201526020820152610bce565b60405160008152602090f35b90600182811c9216801561049d575b602083101461048757565b634e487b7160e01b600052602260045260246000fd5b91607f169161047c565b50634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b038211176104d957604052565b6104e16104a7565b604052565b604081019081106001600160401b038211176104d957604052565b601f909101601f19168101906001600160401b038211908210176104d957604052565b60405190600082600254916105388361046d565b8083526001938085169081156105ae5750600114610560575b5061055e92500383610501565b565b60026000908152600080516020610cda83398151915294602093509091905b81831061059657505061055e935082010138610551565b8554888401850152948501948794509183019161057f565b905061055e94506020925060ff191682840152151560051b82010138610551565b6040519061012082016001600160401b038111838210176104d957604052565b604051906105fc826104e6565b60006020838281520152565b60405190608082016001600160401b0381118382101761064c575b60405260006060838281526106366105ef565b60208201526106436105ef565b60408201520152565b6106546104a7565b610623565b6001600160a01b031690565b6001600160a01b0381160361031e57565b9081604091031261031e57602060405191610690836104e6565b805161069b81610665565b835201516106a881610665565b602082015290565b3d156106f8573d906001600160401b0382116106eb575b604051916106df601f8201601f191660200184610501565b82523d6000602084013e565b6106f36104a7565b6106c7565b606090565b9081602091031261031e575161071281610665565b90565b818110610720575050565b60008155600101610715565b90601f8211610739575050565b61055e9160026000526020600020906020601f840160051c83019310610767575b601f0160051c0190610715565b909150819061075a565b80519091906001600160401b038111610847575b6107998161079460025461046d565b61072c565b602080601f83116001146107d557508192936000926107ca575b50508160011b916000199060031b1c191617600255565b0151905038806107b3565b6002600052601f19831694909190600080516020610cda833981519152926000905b87821061082f575050836001959610610816575b505050811b01600255565b015160001960f88460031b161c1916905538808061080b565b806001859682949686015181550195019301906107f7565b61084f6104a7565b610785565b1561085b57565b60405163100960cb60e01b8152600a6004820152602490fd5b1561087b57565b60405163100960cb60e01b8152600b6004820152602490fd5b1561089b57565b60405163100960cb60e01b8152600c6004820152602490fd5b156108bb57565b60405163100960cb60e01b8152600d6004820152602490fd5b156108db57565b60405163100960cb60e01b8152600e6004820152602490fd5b156108fb57565b60405163100960cb60e01b815260106004820152602490fd5b1561091b57565b60405163100960cb60e01b815260116004820152602490fd5b1561093b57565b60405163100960cb60e01b815260126004820152602490fd5b1561095b57565b60405163100960cb60e01b815260136004820152602490fd5b1561097b57565b60405163100960cb60e01b815260146004820152602490fd5b1561099b57565b60405163100960cb60e01b815260156004820152602490fd5b156109bc5790565b8051156109cb57805190602001fd5b60405163100960cb60e01b8152600f6004820152602490fd5b604435906001600160c01b03198216820361031e57565b60a4359061055e82610665565b60c4359061055e82610665565b60609061012319011261031e5760405190606082016001600160401b03811183821017610a5b575b60405281610124358152610144356020820152604061016435910152565b610a636104a7565b610a3d565b61014061055e9294939460206101a084019660018060a01b0380931685528051828601520151908151604085015260018060c01b0319602083015116606085015260408201516080850152606082015160a085015260808201511660c0840152610ae160a082015160e085019060018060a01b03169052565b60c081015190610100918285015260e081015161012085015201519101906040809180518452602081015160208501520151910152565b9081604091031261031e57602060405191610b32836104e6565b8051610b3d81610665565b83520151602082015290565b506040513d6000823e3d90fd5b610b6160025461046d565b80610b695750565b601f8111600114610b7c57506000600255565b6002600052610bc190601f0160051c600080516020610cda833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf610715565b6000602081208160025555565b610be5610be06100ee60045460ff1690565b610914565b7f1eeb65bf3e6b315a9c9ff01655b1d9c8c418ef23679e56203d3d2c5411bff6c360405180610c15843383610a68565b0390a160008080808094610c2c6002835414610934565b610c5b610c49610c3a610524565b60208082518301019101610b18565b91518015908115610ccd575b50610954565b610c653415610974565b610c813360018060a01b03610c7a8451610659565b1614610994565b6020610c906102018351610659565b91015190828215610cc4575bf115610cb7575b8055610caf6000600155565b61055e610b56565b610cbf610b49565b610ca3565b506108fc610c9c565b90506001541438610c5556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 4209,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './Tokenize.rsh:29:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './Tokenize.rsh:33:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './Tokenize.rsh:42:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "User": User
  };
export const _APIs = {
  };
