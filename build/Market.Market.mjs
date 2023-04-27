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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  return {
    MarketView: {
      auctionEnd: [ctc0, ctc1, ctc2, ctc3],
      showBid: [ctc0, ctc1, ctc2]
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Digest;
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Struct([['AssetName', ctc5], ['AssetSymbol', ctc6], ['AssetType', ctc0], ['AssetValue', ctc0], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc9], ['Time', ctc0], ['ExtCID', ctc7], ['ExpiryDate', ctc0], ['TokenID', ctc8]]);
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc11
    });
  const map0_ctc = ctc12;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc3, ctc4, ctc5, ctc5, ctc6, ctc0, ctc4, ctc7],
      2: [ctc4, ctc0, ctc4, ctc0, ctc8, ctc3, ctc9],
      9: [ctc4, ctc8, ctc9, ctc4, ctc3],
      10: [ctc4, ctc4, ctc8, ctc9, ctc0, ctc4, ctc1, ctc0, ctc0, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc5], ['Time', ctc3], ['ExtCID', ctc6], ['ExpiryDate', ctc3], ['TokenID', ctc7]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Tuple([ctc9]);
  return {
    mapDataTy: ctc10
    };
  };
export async function _Bidder_checkExpiry9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_checkExpiry9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_checkExpiry9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc5], ['Time', ctc3], ['ExtCID', ctc6], ['ExpiryDate', ctc3], ['TokenID', ctc7]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Bidder_checkExpiry0_363: ctc13,
    Bidder_makeSell0_363: ctc13
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1011, v1037, v1073, v1083, v1797] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc4, ctc7, ctc5, ctc4, ctc12]);
  const v1832 = ctc.selfAddress();
  const v1834 = stdlib.protect(ctc13, await interact.in(), {
    at: './Market.rsh:1:23:application',
    fs: ['at ./Market.rsh:199:9:application call to [unknown function] (defined at: ./Market.rsh:199:9:function exp)', 'at ./Market.rsh:165:35:application call to "runBidder_checkExpiry0_363" (defined at: ./Market.rsh:198:11:function exp)', 'at ./Market.rsh:165:35:application call to [unknown function] (defined at: ./Market.rsh:165:35:function exp)'],
    msg: 'in',
    who: 'Bidder_checkExpiry'
    });
  const v1835 = v1834[stdlib.checkedBigNumberify('./Market.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1839 = stdlib.tokenEq(v1835, v1037);
  stdlib.assert(v1839, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Market.rsh:168:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:199:30:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:199:9:application call to [unknown function] (defined at: ./Market.rsh:199:14:function exp)', 'at ./Market.rsh:199:9:application call to [unknown function] (defined at: ./Market.rsh:199:9:function exp)', 'at ./Market.rsh:165:35:application call to "runBidder_checkExpiry0_363" (defined at: ./Market.rsh:198:11:function exp)', 'at ./Market.rsh:165:35:application call to [unknown function] (defined at: ./Market.rsh:165:35:function exp)'],
    msg: 'Token not similar.',
    who: 'Bidder_checkExpiry'
    });
  const v1841 = stdlib.addressEq(v1832, v1083);
  stdlib.assert(v1841, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Market.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:199:30:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:199:9:application call to [unknown function] (defined at: ./Market.rsh:199:14:function exp)', 'at ./Market.rsh:199:9:application call to [unknown function] (defined at: ./Market.rsh:199:9:function exp)', 'at ./Market.rsh:165:35:application call to "runBidder_checkExpiry0_363" (defined at: ./Market.rsh:198:11:function exp)', 'at ./Market.rsh:165:35:application call to [unknown function] (defined at: ./Market.rsh:165:35:function exp)'],
    msg: 'You are not the highest bidder.',
    who: 'Bidder_checkExpiry'
    });
  const v1846 = ['Bidder_checkExpiry0_363', v1834];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1011, v1037, v1073, v1083, v1797, v1846],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./Market.rsh:200:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'), v1037]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1865], secs: v1867, time: v1866, didSend: v596, from: v1864 } = txn1;
      
      switch (v1865[0]) {
        case 'Bidder_checkExpiry0_363': {
          const v1868 = v1865[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_checkExpiry"
            });
          ;
          const v1888 = v1797[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v1889 = v1888[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v1890 = stdlib.add(v1889, stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'));
          const v1892 = stdlib.Array_set(v1888, '0', v1890);
          const v1893 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0'), v1892);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v1037
            });
          const v1901 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1864), null);
          const v1902 = '00000000000000000000000000000000';
          const v1903 = '00000000';
          const v1904 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v1905 = {
            AdminAddress: v1011,
            AssetName: v1902,
            AssetSymbol: v1903,
            AssetType: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            AssetValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExpiryDate: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExtCID: v1904,
            Hash: v1073,
            OwnerAddress: v1011,
            Time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            TokenID: v1037
            };
          const v1906 = stdlib.fromSome(v1901, v1905);
          const v1907 = v1906.ExpiryDate;
          const v1909 = stdlib.lt(v1907, v1866);
          if (v1909) {
            const v1910 = v1893[stdlib.checkedBigNumberify('./Market.rsh:206:26:application', stdlib.UInt_max, '0')];
            const v1911 = v1910[stdlib.checkedBigNumberify('./Market.rsh:206:26:application', stdlib.UInt_max, '0')];
            const v1913 = v1910[stdlib.checkedBigNumberify('./Market.rsh:206:43:application', stdlib.UInt_max, '1')];
            const v1914 = [v1911, v1913, true];
            const v1915 = await txn1.getOutput('Bidder_checkExpiry', 'v1914', ctc11, v1914);
            
            const v2943 = v1893;
            const v2947 = stdlib.lt(v1911, v1913);
            if (v2947) {
              sim_r.isHalt = false;
              }
            else {
              const v2950 = stdlib.sub(v1911, v1911);
              const v2951 = stdlib.Array_set(v1910, '0', v2950);
              const v2952 = stdlib.Array_set(v1893, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2951);
              const v2953 = v2952[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
              const v2954 = v2953[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
              const v2955 = stdlib.sub(v2954, v1911);
              const v2956 = stdlib.Array_set(v2953, '1', v2955);
              const v2957 = stdlib.Array_set(v2952, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2956);
              stdlib.simTokenBurn(sim_r, v1037, v1911);
              const v2958 = v2957[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
              const v2959 = v2958[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
              if (v2959) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1037);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v1926 = v1893[stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0')];
            const v1927 = v1926[stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0')];
            const v1931 = stdlib.sub(v1927, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
            const v1933 = stdlib.Array_set(v1926, '0', v1931);
            const v1934 = stdlib.Array_set(v1893, stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0'), v1933);
            sim_r.txns.push({
              kind: 'from',
              to: v1864,
              tok: v1037
              });
            const v1935 = v1934[stdlib.checkedBigNumberify('./Market.rsh:210:26:application', stdlib.UInt_max, '0')];
            const v1936 = v1935[stdlib.checkedBigNumberify('./Market.rsh:210:26:application', stdlib.UInt_max, '0')];
            const v1938 = v1935[stdlib.checkedBigNumberify('./Market.rsh:210:43:application', stdlib.UInt_max, '1')];
            const v1939 = [v1936, v1938, false];
            const v1940 = await txn1.getOutput('Bidder_checkExpiry', 'v1939', ctc11, v1939);
            
            const v2961 = v1934;
            const v2965 = stdlib.lt(v1936, v1938);
            if (v2965) {
              sim_r.isHalt = false;
              }
            else {
              const v2968 = stdlib.sub(v1936, v1936);
              const v2969 = stdlib.Array_set(v1935, '0', v2968);
              const v2970 = stdlib.Array_set(v1934, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2969);
              const v2971 = v2970[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
              const v2972 = v2971[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
              const v2973 = stdlib.sub(v2972, v1936);
              const v2974 = stdlib.Array_set(v2971, '1', v2973);
              const v2975 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2974);
              stdlib.simTokenBurn(sim_r, v1037, v1936);
              const v2976 = v2975[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
              const v2977 = v2976[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
              if (v2977) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1037);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_makeSell0_363': {
          const v1992 = v1865[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc7, ctc5, ctc4, ctc12, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1865], secs: v1867, time: v1866, didSend: v596, from: v1864 } = txn1;
  switch (v1865[0]) {
    case 'Bidder_checkExpiry0_363': {
      const v1868 = v1865[1];
      undefined /* setApiDetails */;
      ;
      const v1888 = v1797[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
      const v1889 = v1888[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
      const v1890 = stdlib.add(v1889, stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'));
      const v1892 = stdlib.Array_set(v1888, '0', v1890);
      const v1893 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0'), v1892);
      ;
      const v1895 = v1868[stdlib.checkedBigNumberify('./Market.rsh:198:11:spread', stdlib.UInt_max, '0')];
      const v1897 = stdlib.tokenEq(v1895, v1037);
      stdlib.assert(v1897, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Market.rsh:168:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:202:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:201:9:application call to [unknown function] (defined at: ./Market.rsh:201:9:function exp)'],
        msg: 'Token not similar.',
        who: 'Bidder_checkExpiry'
        });
      const v1899 = stdlib.addressEq(v1864, v1083);
      stdlib.assert(v1899, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Market.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:202:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:201:9:application call to [unknown function] (defined at: ./Market.rsh:201:9:function exp)'],
        msg: 'You are not the highest bidder.',
        who: 'Bidder_checkExpiry'
        });
      const v1901 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1864), null);
      const v1902 = '00000000000000000000000000000000';
      const v1903 = '00000000';
      const v1904 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      const v1905 = {
        AdminAddress: v1011,
        AssetName: v1902,
        AssetSymbol: v1903,
        AssetType: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        AssetValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ExpiryDate: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ExtCID: v1904,
        Hash: v1073,
        OwnerAddress: v1011,
        Time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        TokenID: v1037
        };
      const v1906 = stdlib.fromSome(v1901, v1905);
      const v1907 = v1906.ExpiryDate;
      const v1909 = stdlib.lt(v1907, v1866);
      if (v1909) {
        const v1910 = v1893[stdlib.checkedBigNumberify('./Market.rsh:206:26:application', stdlib.UInt_max, '0')];
        const v1911 = v1910[stdlib.checkedBigNumberify('./Market.rsh:206:26:application', stdlib.UInt_max, '0')];
        const v1913 = v1910[stdlib.checkedBigNumberify('./Market.rsh:206:43:application', stdlib.UInt_max, '1')];
        const v1914 = [v1911, v1913, true];
        const v1915 = await txn1.getOutput('Bidder_checkExpiry', 'v1914', ctc11, v1914);
        if (v596) {
          stdlib.protect(ctc0, await interact.out(v1868, v1915), {
            at: './Market.rsh:198:12:application',
            fs: ['at ./Market.rsh:198:12:application call to [unknown function] (defined at: ./Market.rsh:198:12:function exp)', 'at ./Market.rsh:206:17:application call to "fn" (defined at: ./Market.rsh:201:9:function exp)', 'at ./Market.rsh:208:15:application call to [unknown function] (defined at: ./Market.rsh:205:43:function exp)', 'at ./Market.rsh:201:9:application call to [unknown function] (defined at: ./Market.rsh:201:9:function exp)'],
            msg: 'out',
            who: 'Bidder_checkExpiry'
            });
          }
        else {
          }
        
        const v2943 = v1893;
        const v2947 = stdlib.lt(v1911, v1913);
        if (v2947) {
          return;
          }
        else {
          const v2950 = stdlib.sub(v1911, v1911);
          const v2951 = stdlib.Array_set(v1910, '0', v2950);
          const v2952 = stdlib.Array_set(v1893, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2951);
          const v2953 = v2952[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
          const v2954 = v2953[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
          const v2955 = stdlib.sub(v2954, v1911);
          const v2956 = stdlib.Array_set(v2953, '1', v2955);
          const v2957 = stdlib.Array_set(v2952, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2956);
          undefined /* TokenBurn */;
          const v2958 = v2957[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
          const v2959 = v2958[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
          if (v2959) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }}}
      else {
        const v1926 = v1893[stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0')];
        const v1927 = v1926[stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0')];
        const v1931 = stdlib.sub(v1927, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
        const v1933 = stdlib.Array_set(v1926, '0', v1931);
        const v1934 = stdlib.Array_set(v1893, stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0'), v1933);
        ;
        const v1935 = v1934[stdlib.checkedBigNumberify('./Market.rsh:210:26:application', stdlib.UInt_max, '0')];
        const v1936 = v1935[stdlib.checkedBigNumberify('./Market.rsh:210:26:application', stdlib.UInt_max, '0')];
        const v1938 = v1935[stdlib.checkedBigNumberify('./Market.rsh:210:43:application', stdlib.UInt_max, '1')];
        const v1939 = [v1936, v1938, false];
        const v1940 = await txn1.getOutput('Bidder_checkExpiry', 'v1939', ctc11, v1939);
        if (v596) {
          stdlib.protect(ctc0, await interact.out(v1868, v1940), {
            at: './Market.rsh:198:12:application',
            fs: ['at ./Market.rsh:198:12:application call to [unknown function] (defined at: ./Market.rsh:198:12:function exp)', 'at ./Market.rsh:210:17:application call to "fn" (defined at: ./Market.rsh:201:9:function exp)', 'at ./Market.rsh:212:15:application call to [unknown function] (defined at: ./Market.rsh:208:23:function exp)', 'at ./Market.rsh:201:9:application call to [unknown function] (defined at: ./Market.rsh:201:9:function exp)'],
            msg: 'out',
            who: 'Bidder_checkExpiry'
            });
          }
        else {
          }
        
        const v2961 = v1934;
        const v2965 = stdlib.lt(v1936, v1938);
        if (v2965) {
          return;
          }
        else {
          const v2968 = stdlib.sub(v1936, v1936);
          const v2969 = stdlib.Array_set(v1935, '0', v2968);
          const v2970 = stdlib.Array_set(v1934, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2969);
          const v2971 = v2970[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
          const v2972 = v2971[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
          const v2973 = stdlib.sub(v2972, v1936);
          const v2974 = stdlib.Array_set(v2971, '1', v2973);
          const v2975 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2974);
          undefined /* TokenBurn */;
          const v2976 = v2975[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
          const v2977 = v2976[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
          if (v2977) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }}}
      break;
      }
    case 'Bidder_makeSell0_363': {
      const v1992 = v1865[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_makeBid10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_makeBid10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_makeBid10 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc5], ['Time', ctc3], ['ExtCID', ctc6], ['ExpiryDate', ctc3], ['TokenID', ctc7]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Bidder_makeBid0_144: ctc13,
    Bidder_makePurchase0_144: ctc13
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1011, v1021, v1037, v1073, v1082, v1083, v1084, v1085, v1086, v1092] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc4, ctc4, ctc7, ctc5, ctc3, ctc4, ctc10, ctc3, ctc3, ctc12]);
  const v1127 = stdlib.protect(ctc13, await interact.in(), {
    at: './Market.rsh:1:23:application',
    fs: ['at ./Market.rsh:113:10:application call to [unknown function] (defined at: ./Market.rsh:113:10:function exp)', 'at ./Market.rsh:94:35:application call to "runBidder_makeBid0_144" (defined at: ./Market.rsh:112:10:function exp)', 'at ./Market.rsh:94:35:application call to [unknown function] (defined at: ./Market.rsh:94:35:function exp)'],
    msg: 'in',
    who: 'Bidder_makeBid'
    });
  const v1128 = v1127[stdlib.checkedBigNumberify('./Market.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1130 = stdlib.gt(v1128, v1085);
  stdlib.assert(v1130, {
    at: './Market.rsh:113:25:application',
    fs: ['at ./Market.rsh:113:10:application call to [unknown function] (defined at: ./Market.rsh:113:16:function exp)', 'at ./Market.rsh:113:10:application call to [unknown function] (defined at: ./Market.rsh:113:10:function exp)', 'at ./Market.rsh:94:35:application call to "runBidder_makeBid0_144" (defined at: ./Market.rsh:112:10:function exp)', 'at ./Market.rsh:94:35:application call to [unknown function] (defined at: ./Market.rsh:94:35:function exp)'],
    msg: 'Bid must be greater than asset value.',
    who: 'Bidder_makeBid'
    });
  const v1134 = ['Bidder_makeBid0_144', v1127];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1011, v1021, v1037, v1073, v1082, v1083, v1084, v1085, v1086, v1092, v1134],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v1128, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1141], secs: v1143, time: v1142, didSend: v229, from: v1140 } = txn1;
      
      switch (v1141[0]) {
        case 'Bidder_makeBid0_144': {
          const v1144 = v1141[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_makeBid"
            });
          const v1149 = v1144[stdlib.checkedBigNumberify('./Market.rsh:112:10:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v1149,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          if (v1084) {
            const v1170 = await txn1.getOutput('Bidder_makeBid', 'v1037', ctc7, v1037);
            
            const v1176 = 'SB';
            null;
            const v3014 = v1140;
            const v3015 = false;
            const v3016 = v1149;
            const v3017 = v1142;
            const v3019 = v1092;
            const v3020 = stdlib.gt(v1082, v1086);
            if (v3020) {
              sim_r.isHalt = false;
              }
            else {
              const v3022 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1149, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
              const v3024 = stdlib.safeSub(v1149, v3022);
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              const v3037 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3038 = v3037[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3039 = stdlib.sub(v3038, v3038);
              const v3040 = stdlib.Array_set(v3037, '0', v3039);
              const v3041 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3040);
              sim_r.txns.push({
                kind: 'from',
                to: v1140,
                tok: v1037
                });
              const v3042 = 'AE';
              const v3043 = true;
              null;
              const v3044 = v3041[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v3045 = v3044[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v3127 = v3041;
              const v3130 = v3044[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
              const v3131 = stdlib.lt(v3045, v3130);
              if (v3131) {
                sim_r.isHalt = false;
                }
              else {
                const v3134 = stdlib.sub(v3045, v3045);
                const v3135 = stdlib.Array_set(v3044, '0', v3134);
                const v3136 = stdlib.Array_set(v3041, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3135);
                const v3137 = v3136[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                const v3138 = v3137[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
                const v3139 = stdlib.sub(v3138, v3045);
                const v3140 = stdlib.Array_set(v3137, '1', v3139);
                const v3141 = stdlib.Array_set(v3136, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3140);
                stdlib.simTokenBurn(sim_r, v1037, v3045);
                const v3142 = v3141[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
                const v3143 = v3142[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
                if (v3143) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1037);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v1083,
              tok: undefined /* Nothing */
              });
            const v1162 = await txn1.getOutput('Bidder_makeBid', 'v1037', ctc7, v1037);
            
            const v1168 = 'SB';
            null;
            const v3144 = v1140;
            const v3145 = false;
            const v3146 = v1149;
            const v3147 = v1142;
            const v3149 = v1092;
            const v3150 = stdlib.gt(v1082, v1086);
            if (v3150) {
              sim_r.isHalt = false;
              }
            else {
              const v3152 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1149, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
              const v3154 = stdlib.safeSub(v1149, v3152);
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              const v3167 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3168 = v3167[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3169 = stdlib.sub(v3168, v3168);
              const v3170 = stdlib.Array_set(v3167, '0', v3169);
              const v3171 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3170);
              sim_r.txns.push({
                kind: 'from',
                to: v1140,
                tok: v1037
                });
              const v3172 = 'AE';
              const v3173 = true;
              null;
              const v3174 = v3171[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v3175 = v3174[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v3257 = v3171;
              const v3260 = v3174[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
              const v3261 = stdlib.lt(v3175, v3260);
              if (v3261) {
                sim_r.isHalt = false;
                }
              else {
                const v3264 = stdlib.sub(v3175, v3175);
                const v3265 = stdlib.Array_set(v3174, '0', v3264);
                const v3266 = stdlib.Array_set(v3171, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3265);
                const v3267 = v3266[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                const v3268 = v3267[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
                const v3269 = stdlib.sub(v3268, v3175);
                const v3270 = stdlib.Array_set(v3267, '1', v3269);
                const v3271 = stdlib.Array_set(v3266, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3270);
                stdlib.simTokenBurn(sim_r, v1037, v3175);
                const v3272 = v3271[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
                const v3273 = v3272[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
                if (v3273) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1037);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        case 'Bidder_makePurchase0_144': {
          const v1204 = v1141[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc7, ctc5, ctc3, ctc4, ctc10, ctc3, ctc3, ctc12, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1141], secs: v1143, time: v1142, didSend: v229, from: v1140 } = txn1;
  switch (v1141[0]) {
    case 'Bidder_makeBid0_144': {
      const v1144 = v1141[1];
      undefined /* setApiDetails */;
      const v1149 = v1144[stdlib.checkedBigNumberify('./Market.rsh:112:10:spread', stdlib.UInt_max, '0')];
      ;
      const v1156 = stdlib.gt(v1149, v1085);
      stdlib.assert(v1156, {
        at: './Market.rsh:116:21:application',
        fs: ['at ./Market.rsh:115:10:application call to [unknown function] (defined at: ./Market.rsh:115:10:function exp)'],
        msg: 'Bid must be greater than asset value.',
        who: 'Bidder_makeBid'
        });
      if (v1084) {
        const v1170 = await txn1.getOutput('Bidder_makeBid', 'v1037', ctc7, v1037);
        if (v229) {
          stdlib.protect(ctc0, await interact.out(v1144, v1170), {
            at: './Market.rsh:112:11:application',
            fs: ['at ./Market.rsh:112:11:application call to [unknown function] (defined at: ./Market.rsh:112:11:function exp)', 'at ./Market.rsh:120:16:application call to "fn" (defined at: ./Market.rsh:115:10:function exp)', 'at ./Market.rsh:115:10:application call to [unknown function] (defined at: ./Market.rsh:115:10:function exp)'],
            msg: 'out',
            who: 'Bidder_makeBid'
            });
          }
        else {
          }
        
        const v1176 = 'SB';
        null;
        const v3014 = v1140;
        const v3015 = false;
        const v3016 = v1149;
        const v3017 = v1142;
        const v3019 = v1092;
        const v3020 = stdlib.gt(v1082, v1086);
        if (v3020) {
          return;
          }
        else {
          const v3022 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1149, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
          const v3024 = stdlib.safeSub(v1149, v3022);
          ;
          ;
          const v3037 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3038 = v3037[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3039 = stdlib.sub(v3038, v3038);
          const v3040 = stdlib.Array_set(v3037, '0', v3039);
          const v3041 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3040);
          ;
          const v3042 = 'AE';
          const v3043 = true;
          null;
          const v3044 = v3041[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3045 = v3044[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3046 = stdlib.eq(v3045, stdlib.checkedBigNumberify('./Market.rsh:164:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3046, {
            at: './Market.rsh:164:14:application',
            fs: [],
            msg: 'There should be no token in the contract at this stage',
            who: 'Bidder_makeBid'
            });
          const v3127 = v3041;
          const v3130 = v3044[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
          const v3131 = stdlib.lt(v3045, v3130);
          if (v3131) {
            return;
            }
          else {
            const v3134 = stdlib.sub(v3045, v3045);
            const v3135 = stdlib.Array_set(v3044, '0', v3134);
            const v3136 = stdlib.Array_set(v3041, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3135);
            const v3137 = v3136[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
            const v3138 = v3137[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
            const v3139 = stdlib.sub(v3138, v3045);
            const v3140 = stdlib.Array_set(v3137, '1', v3139);
            const v3141 = stdlib.Array_set(v3136, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3140);
            undefined /* TokenBurn */;
            const v3142 = v3141[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
            const v3143 = v3142[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
            if (v3143) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      else {
        ;
        const v1162 = await txn1.getOutput('Bidder_makeBid', 'v1037', ctc7, v1037);
        if (v229) {
          stdlib.protect(ctc0, await interact.out(v1144, v1162), {
            at: './Market.rsh:112:11:application',
            fs: ['at ./Market.rsh:112:11:application call to [unknown function] (defined at: ./Market.rsh:112:11:function exp)', 'at ./Market.rsh:120:16:application call to "fn" (defined at: ./Market.rsh:115:10:function exp)', 'at ./Market.rsh:115:10:application call to [unknown function] (defined at: ./Market.rsh:115:10:function exp)'],
            msg: 'out',
            who: 'Bidder_makeBid'
            });
          }
        else {
          }
        
        const v1168 = 'SB';
        null;
        const v3144 = v1140;
        const v3145 = false;
        const v3146 = v1149;
        const v3147 = v1142;
        const v3149 = v1092;
        const v3150 = stdlib.gt(v1082, v1086);
        if (v3150) {
          return;
          }
        else {
          const v3152 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1149, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
          const v3154 = stdlib.safeSub(v1149, v3152);
          ;
          ;
          const v3167 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3168 = v3167[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3169 = stdlib.sub(v3168, v3168);
          const v3170 = stdlib.Array_set(v3167, '0', v3169);
          const v3171 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3170);
          ;
          const v3172 = 'AE';
          const v3173 = true;
          null;
          const v3174 = v3171[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3175 = v3174[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3176 = stdlib.eq(v3175, stdlib.checkedBigNumberify('./Market.rsh:164:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3176, {
            at: './Market.rsh:164:14:application',
            fs: [],
            msg: 'There should be no token in the contract at this stage',
            who: 'Bidder_makeBid'
            });
          const v3257 = v3171;
          const v3260 = v3174[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
          const v3261 = stdlib.lt(v3175, v3260);
          if (v3261) {
            return;
            }
          else {
            const v3264 = stdlib.sub(v3175, v3175);
            const v3265 = stdlib.Array_set(v3174, '0', v3264);
            const v3266 = stdlib.Array_set(v3171, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3265);
            const v3267 = v3266[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
            const v3268 = v3267[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
            const v3269 = stdlib.sub(v3268, v3175);
            const v3270 = stdlib.Array_set(v3267, '1', v3269);
            const v3271 = stdlib.Array_set(v3266, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3270);
            undefined /* TokenBurn */;
            const v3272 = v3271[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
            const v3273 = v3272[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
            if (v3273) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      break;
      }
    case 'Bidder_makePurchase0_144': {
      const v1204 = v1141[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_makePurchase10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_makePurchase10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_makePurchase10 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc5], ['Time', ctc3], ['ExtCID', ctc6], ['ExpiryDate', ctc3], ['TokenID', ctc7]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Bidder_makeBid0_144: ctc13,
    Bidder_makePurchase0_144: ctc13
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1011, v1021, v1037, v1073, v1082, v1083, v1084, v1085, v1086, v1092] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc4, ctc4, ctc7, ctc5, ctc3, ctc4, ctc10, ctc3, ctc3, ctc12]);
  const v1112 = ctc.selfAddress();
  const v1114 = stdlib.protect(ctc13, await interact.in(), {
    at: './Market.rsh:1:23:application',
    fs: ['at ./Market.rsh:101:10:application call to [unknown function] (defined at: ./Market.rsh:101:10:function exp)', 'at ./Market.rsh:94:35:application call to "runBidder_makePurchase0_144" (defined at: ./Market.rsh:100:10:function exp)', 'at ./Market.rsh:94:35:application call to [unknown function] (defined at: ./Market.rsh:94:35:function exp)'],
    msg: 'in',
    who: 'Bidder_makePurchase'
    });
  const v1115 = v1114[stdlib.checkedBigNumberify('./Market.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1117 = stdlib.addressEq(v1112, v1021);
  const v1118 = stdlib.eq(v1115, v1085);
  const v1119 = v1117 ? v1118 : false;
  stdlib.assert(v1119, {
    at: './Market.rsh:101:25:application',
    fs: ['at ./Market.rsh:101:10:application call to [unknown function] (defined at: ./Market.rsh:101:16:function exp)', 'at ./Market.rsh:101:10:application call to [unknown function] (defined at: ./Market.rsh:101:10:function exp)', 'at ./Market.rsh:94:35:application call to "runBidder_makePurchase0_144" (defined at: ./Market.rsh:100:10:function exp)', 'at ./Market.rsh:94:35:application call to [unknown function] (defined at: ./Market.rsh:94:35:function exp)'],
    msg: 'You don\'t own this asset.',
    who: 'Bidder_makePurchase'
    });
  const v1123 = ['Bidder_makePurchase0_144', v1114];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1011, v1021, v1037, v1073, v1082, v1083, v1084, v1085, v1086, v1092, v1123],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [v1115, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1141], secs: v1143, time: v1142, didSend: v229, from: v1140 } = txn1;
      
      switch (v1141[0]) {
        case 'Bidder_makeBid0_144': {
          const v1144 = v1141[1];
          
          break;
          }
        case 'Bidder_makePurchase0_144': {
          const v1204 = v1141[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_makePurchase"
            });
          const v1211 = v1204[stdlib.checkedBigNumberify('./Market.rsh:100:10:spread', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: v1211,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          if (v1084) {
            const v1256 = 'SB';
            null;
            const v1257 = await txn1.getOutput('Bidder_makePurchase', 'v1037', ctc7, v1037);
            
            const v3794 = v1140;
            const v3795 = false;
            const v3796 = v1211;
            const v3797 = v1142;
            const v3799 = v1092;
            const v3800 = stdlib.gt(v1082, v1086);
            if (v3800) {
              sim_r.isHalt = false;
              }
            else {
              const v3802 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1211, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
              const v3804 = stdlib.safeSub(v1211, v3802);
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              const v3817 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3818 = v3817[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3819 = stdlib.sub(v3818, v3818);
              const v3820 = stdlib.Array_set(v3817, '0', v3819);
              const v3821 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3820);
              sim_r.txns.push({
                kind: 'from',
                to: v1140,
                tok: v1037
                });
              const v3822 = 'AE';
              const v3823 = true;
              null;
              const v3824 = v3821[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v3825 = v3824[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v3907 = v3821;
              const v3910 = v3824[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
              const v3911 = stdlib.lt(v3825, v3910);
              if (v3911) {
                sim_r.isHalt = false;
                }
              else {
                const v3914 = stdlib.sub(v3825, v3825);
                const v3915 = stdlib.Array_set(v3824, '0', v3914);
                const v3916 = stdlib.Array_set(v3821, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3915);
                const v3917 = v3916[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                const v3918 = v3917[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
                const v3919 = stdlib.sub(v3918, v3825);
                const v3920 = stdlib.Array_set(v3917, '1', v3919);
                const v3921 = stdlib.Array_set(v3916, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3920);
                stdlib.simTokenBurn(sim_r, v1037, v3825);
                const v3922 = v3921[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
                const v3923 = v3922[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
                if (v3923) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1037);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v1083,
              tok: undefined /* Nothing */
              });
            const v1248 = 'SB';
            null;
            const v1249 = await txn1.getOutput('Bidder_makePurchase', 'v1037', ctc7, v1037);
            
            const v3924 = v1140;
            const v3925 = false;
            const v3926 = v1211;
            const v3927 = v1142;
            const v3929 = v1092;
            const v3930 = stdlib.gt(v1082, v1086);
            if (v3930) {
              sim_r.isHalt = false;
              }
            else {
              const v3932 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1211, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
              const v3934 = stdlib.safeSub(v1211, v3932);
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v1011,
                tok: undefined /* Nothing */
                });
              const v3947 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3948 = v3947[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
              const v3949 = stdlib.sub(v3948, v3948);
              const v3950 = stdlib.Array_set(v3947, '0', v3949);
              const v3951 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3950);
              sim_r.txns.push({
                kind: 'from',
                to: v1140,
                tok: v1037
                });
              const v3952 = 'AE';
              const v3953 = true;
              null;
              const v3954 = v3951[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v3955 = v3954[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
              const v4037 = v3951;
              const v4040 = v3954[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
              const v4041 = stdlib.lt(v3955, v4040);
              if (v4041) {
                sim_r.isHalt = false;
                }
              else {
                const v4044 = stdlib.sub(v3955, v3955);
                const v4045 = stdlib.Array_set(v3954, '0', v4044);
                const v4046 = stdlib.Array_set(v3951, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4045);
                const v4047 = v4046[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                const v4048 = v4047[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
                const v4049 = stdlib.sub(v4048, v3955);
                const v4050 = stdlib.Array_set(v4047, '1', v4049);
                const v4051 = stdlib.Array_set(v4046, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4050);
                stdlib.simTokenBurn(sim_r, v1037, v3955);
                const v4052 = v4051[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
                const v4053 = v4052[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
                if (v4053) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1037);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc7, ctc5, ctc3, ctc4, ctc10, ctc3, ctc3, ctc12, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1141], secs: v1143, time: v1142, didSend: v229, from: v1140 } = txn1;
  switch (v1141[0]) {
    case 'Bidder_makeBid0_144': {
      const v1144 = v1141[1];
      return;
      break;
      }
    case 'Bidder_makePurchase0_144': {
      const v1204 = v1141[1];
      undefined /* setApiDetails */;
      const v1211 = v1204[stdlib.checkedBigNumberify('./Market.rsh:100:10:spread', stdlib.UInt_max, '0')];
      ;
      const v1240 = stdlib.addressEq(v1140, v1021);
      const v1241 = stdlib.eq(v1211, v1085);
      const v1242 = v1240 ? v1241 : false;
      stdlib.assert(v1242, {
        at: './Market.rsh:104:21:application',
        fs: ['at ./Market.rsh:103:10:application call to [unknown function] (defined at: ./Market.rsh:103:10:function exp)'],
        msg: 'You don\'t own this asset.',
        who: 'Bidder_makePurchase'
        });
      if (v1084) {
        const v1256 = 'SB';
        null;
        const v1257 = await txn1.getOutput('Bidder_makePurchase', 'v1037', ctc7, v1037);
        if (v229) {
          stdlib.protect(ctc0, await interact.out(v1204, v1257), {
            at: './Market.rsh:100:11:application',
            fs: ['at ./Market.rsh:100:11:application call to [unknown function] (defined at: ./Market.rsh:100:11:function exp)', 'at ./Market.rsh:109:16:application call to "fn" (defined at: ./Market.rsh:103:10:function exp)', 'at ./Market.rsh:103:10:application call to [unknown function] (defined at: ./Market.rsh:103:10:function exp)'],
            msg: 'out',
            who: 'Bidder_makePurchase'
            });
          }
        else {
          }
        
        const v3794 = v1140;
        const v3795 = false;
        const v3796 = v1211;
        const v3797 = v1142;
        const v3799 = v1092;
        const v3800 = stdlib.gt(v1082, v1086);
        if (v3800) {
          return;
          }
        else {
          const v3802 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1211, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
          const v3804 = stdlib.safeSub(v1211, v3802);
          ;
          ;
          const v3817 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3818 = v3817[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3819 = stdlib.sub(v3818, v3818);
          const v3820 = stdlib.Array_set(v3817, '0', v3819);
          const v3821 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3820);
          ;
          const v3822 = 'AE';
          const v3823 = true;
          null;
          const v3824 = v3821[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3825 = v3824[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3826 = stdlib.eq(v3825, stdlib.checkedBigNumberify('./Market.rsh:164:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3826, {
            at: './Market.rsh:164:14:application',
            fs: [],
            msg: 'There should be no token in the contract at this stage',
            who: 'Bidder_makePurchase'
            });
          const v3907 = v3821;
          const v3910 = v3824[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
          const v3911 = stdlib.lt(v3825, v3910);
          if (v3911) {
            return;
            }
          else {
            const v3914 = stdlib.sub(v3825, v3825);
            const v3915 = stdlib.Array_set(v3824, '0', v3914);
            const v3916 = stdlib.Array_set(v3821, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3915);
            const v3917 = v3916[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
            const v3918 = v3917[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
            const v3919 = stdlib.sub(v3918, v3825);
            const v3920 = stdlib.Array_set(v3917, '1', v3919);
            const v3921 = stdlib.Array_set(v3916, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v3920);
            undefined /* TokenBurn */;
            const v3922 = v3921[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
            const v3923 = v3922[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
            if (v3923) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      else {
        ;
        const v1248 = 'SB';
        null;
        const v1249 = await txn1.getOutput('Bidder_makePurchase', 'v1037', ctc7, v1037);
        if (v229) {
          stdlib.protect(ctc0, await interact.out(v1204, v1249), {
            at: './Market.rsh:100:11:application',
            fs: ['at ./Market.rsh:100:11:application call to [unknown function] (defined at: ./Market.rsh:100:11:function exp)', 'at ./Market.rsh:109:16:application call to "fn" (defined at: ./Market.rsh:103:10:function exp)', 'at ./Market.rsh:103:10:application call to [unknown function] (defined at: ./Market.rsh:103:10:function exp)'],
            msg: 'out',
            who: 'Bidder_makePurchase'
            });
          }
        else {
          }
        
        const v3924 = v1140;
        const v3925 = false;
        const v3926 = v1211;
        const v3927 = v1142;
        const v3929 = v1092;
        const v3930 = stdlib.gt(v1082, v1086);
        if (v3930) {
          return;
          }
        else {
          const v3932 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1211, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
          const v3934 = stdlib.safeSub(v1211, v3932);
          ;
          ;
          const v3947 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3948 = v3947[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v3949 = stdlib.sub(v3948, v3948);
          const v3950 = stdlib.Array_set(v3947, '0', v3949);
          const v3951 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v3950);
          ;
          const v3952 = 'AE';
          const v3953 = true;
          null;
          const v3954 = v3951[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3955 = v3954[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
          const v3956 = stdlib.eq(v3955, stdlib.checkedBigNumberify('./Market.rsh:164:31:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3956, {
            at: './Market.rsh:164:14:application',
            fs: [],
            msg: 'There should be no token in the contract at this stage',
            who: 'Bidder_makePurchase'
            });
          const v4037 = v3951;
          const v4040 = v3954[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
          const v4041 = stdlib.lt(v3955, v4040);
          if (v4041) {
            return;
            }
          else {
            const v4044 = stdlib.sub(v3955, v3955);
            const v4045 = stdlib.Array_set(v3954, '0', v4044);
            const v4046 = stdlib.Array_set(v3951, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4045);
            const v4047 = v4046[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
            const v4048 = v4047[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
            const v4049 = stdlib.sub(v4048, v3955);
            const v4050 = stdlib.Array_set(v4047, '1', v4049);
            const v4051 = stdlib.Array_set(v4046, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4050);
            undefined /* TokenBurn */;
            const v4052 = v4051[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
            const v4053 = v4052[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
            if (v4053) {
              return;
              }
            else {
              undefined /* TokenDestroy */;
              return;
              }}}}
      break;
      }
    }
  
  
  };
export async function _Bidder_makeSell9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_makeSell9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_makeSell9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc5], ['Time', ctc3], ['ExtCID', ctc6], ['ExpiryDate', ctc3], ['TokenID', ctc7]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc3, ctc3, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc7]);
  const ctc14 = stdlib.T_Data({
    Bidder_checkExpiry0_363: ctc13,
    Bidder_makeSell0_363: ctc13
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1011, v1037, v1073, v1083, v1797] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc4, ctc7, ctc5, ctc4, ctc12]);
  const v1816 = ctc.selfAddress();
  const v1818 = stdlib.protect(ctc13, await interact.in(), {
    at: './Market.rsh:1:23:application',
    fs: ['at ./Market.rsh:182:9:application call to [unknown function] (defined at: ./Market.rsh:182:9:function exp)', 'at ./Market.rsh:165:35:application call to "runBidder_makeSell0_363" (defined at: ./Market.rsh:181:11:function exp)', 'at ./Market.rsh:165:35:application call to [unknown function] (defined at: ./Market.rsh:165:35:function exp)'],
    msg: 'in',
    who: 'Bidder_makeSell'
    });
  const v1819 = v1818[stdlib.checkedBigNumberify('./Market.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1823 = stdlib.tokenEq(v1819, v1037);
  stdlib.assert(v1823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Market.rsh:168:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:182:32:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:182:9:application call to [unknown function] (defined at: ./Market.rsh:182:15:function exp)', 'at ./Market.rsh:182:9:application call to [unknown function] (defined at: ./Market.rsh:182:9:function exp)', 'at ./Market.rsh:165:35:application call to "runBidder_makeSell0_363" (defined at: ./Market.rsh:181:11:function exp)', 'at ./Market.rsh:165:35:application call to [unknown function] (defined at: ./Market.rsh:165:35:function exp)'],
    msg: 'Token not similar.',
    who: 'Bidder_makeSell'
    });
  const v1825 = stdlib.addressEq(v1816, v1083);
  stdlib.assert(v1825, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./Market.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:182:32:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:182:9:application call to [unknown function] (defined at: ./Market.rsh:182:15:function exp)', 'at ./Market.rsh:182:9:application call to [unknown function] (defined at: ./Market.rsh:182:9:function exp)', 'at ./Market.rsh:165:35:application call to "runBidder_makeSell0_363" (defined at: ./Market.rsh:181:11:function exp)', 'at ./Market.rsh:165:35:application call to [unknown function] (defined at: ./Market.rsh:165:35:function exp)'],
    msg: 'You are not the highest bidder.',
    who: 'Bidder_makeSell'
    });
  const v1830 = ['Bidder_makeSell0_363', v1818];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1011, v1037, v1073, v1083, v1797, v1830],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./Market.rsh:183:17:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./Market.rsh:183:20:decimal', stdlib.UInt_max, '1'), v1037]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1865], secs: v1867, time: v1866, didSend: v596, from: v1864 } = txn1;
      
      switch (v1865[0]) {
        case 'Bidder_checkExpiry0_363': {
          const v1868 = v1865[1];
          
          break;
          }
        case 'Bidder_makeSell0_363': {
          const v1992 = v1865[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_makeSell"
            });
          ;
          const v2012 = v1797[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v2013 = v2012[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v2014 = stdlib.add(v2013, stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'));
          const v2016 = stdlib.Array_set(v2012, '0', v2014);
          const v2017 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0'), v2016);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v1037
            });
          const v2082 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1864), null);
          const v2083 = '00000000000000000000000000000000';
          const v2084 = '00000000';
          const v2085 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v2086 = {
            AdminAddress: v1011,
            AssetName: v2083,
            AssetSymbol: v2084,
            AssetType: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            AssetValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExpiryDate: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExtCID: v2085,
            Hash: v1073,
            OwnerAddress: v1011,
            Time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            TokenID: v1037
            };
          const v2087 = stdlib.fromSome(v2082, v2086);
          const v2088 = v2087.ExpiryDate;
          const v2090 = stdlib.lt(v2088, v1866);
          if (v2090) {
            const v2092 = await txn1.getOutput('Bidder_makeSell', 'v2090', ctc10, v2090);
            
            const v4091 = v2017;
            const v4092 = v2017[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
            const v4093 = v4092[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
            const v4094 = v4092[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
            const v4095 = stdlib.lt(v4093, v4094);
            if (v4095) {
              sim_r.isHalt = false;
              }
            else {
              const v4098 = stdlib.sub(v4093, v4093);
              const v4099 = stdlib.Array_set(v4092, '0', v4098);
              const v4100 = stdlib.Array_set(v2017, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4099);
              const v4101 = v4100[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
              const v4102 = v4101[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
              const v4103 = stdlib.sub(v4102, v4093);
              const v4104 = stdlib.Array_set(v4101, '1', v4103);
              const v4105 = stdlib.Array_set(v4100, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4104);
              stdlib.simTokenBurn(sim_r, v1037, v4093);
              const v4106 = v4105[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
              const v4107 = v4106[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
              if (v4107) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1037);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v2099 = v2017[stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0')];
            const v2100 = v2099[stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0')];
            const v2104 = stdlib.sub(v2100, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
            const v2106 = stdlib.Array_set(v2099, '0', v2104);
            const v2107 = stdlib.Array_set(v2017, stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0'), v2106);
            sim_r.txns.push({
              kind: 'from',
              to: v1864,
              tok: v1037
              });
            const v2109 = await txn1.getOutput('Bidder_makeSell', 'v2090', ctc10, v2090);
            
            const v4109 = v2107;
            const v4110 = v2107[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
            const v4111 = v4110[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
            const v4112 = v4110[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
            const v4113 = stdlib.lt(v4111, v4112);
            if (v4113) {
              sim_r.isHalt = false;
              }
            else {
              const v4116 = stdlib.sub(v4111, v4111);
              const v4117 = stdlib.Array_set(v4110, '0', v4116);
              const v4118 = stdlib.Array_set(v2107, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4117);
              const v4119 = v4118[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
              const v4120 = v4119[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
              const v4121 = stdlib.sub(v4120, v4111);
              const v4122 = stdlib.Array_set(v4119, '1', v4121);
              const v4123 = stdlib.Array_set(v4118, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4122);
              stdlib.simTokenBurn(sim_r, v1037, v4111);
              const v4124 = v4123[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
              const v4125 = v4124[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
              if (v4125) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                stdlib.simTokenDestroy(sim_r, v1037);
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc7, ctc5, ctc4, ctc12, ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1865], secs: v1867, time: v1866, didSend: v596, from: v1864 } = txn1;
  switch (v1865[0]) {
    case 'Bidder_checkExpiry0_363': {
      const v1868 = v1865[1];
      return;
      break;
      }
    case 'Bidder_makeSell0_363': {
      const v1992 = v1865[1];
      undefined /* setApiDetails */;
      ;
      const v2012 = v1797[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
      const v2013 = v2012[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
      const v2014 = stdlib.add(v2013, stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'));
      const v2016 = stdlib.Array_set(v2012, '0', v2014);
      const v2017 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0'), v2016);
      ;
      const v2076 = v1992[stdlib.checkedBigNumberify('./Market.rsh:181:11:spread', stdlib.UInt_max, '0')];
      const v2078 = stdlib.tokenEq(v2076, v1037);
      stdlib.assert(v2078, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Market.rsh:168:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:185:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:184:9:application call to [unknown function] (defined at: ./Market.rsh:184:9:function exp)'],
        msg: 'Token not similar.',
        who: 'Bidder_makeSell'
        });
      const v2080 = stdlib.addressEq(v1864, v1083);
      stdlib.assert(v2080, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./Market.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:185:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:184:9:application call to [unknown function] (defined at: ./Market.rsh:184:9:function exp)'],
        msg: 'You are not the highest bidder.',
        who: 'Bidder_makeSell'
        });
      const v2082 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1864), null);
      const v2083 = '00000000000000000000000000000000';
      const v2084 = '00000000';
      const v2085 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
      const v2086 = {
        AdminAddress: v1011,
        AssetName: v2083,
        AssetSymbol: v2084,
        AssetType: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        AssetValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ExpiryDate: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        ExtCID: v2085,
        Hash: v1073,
        OwnerAddress: v1011,
        Time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        TokenID: v1037
        };
      const v2087 = stdlib.fromSome(v2082, v2086);
      const v2088 = v2087.ExpiryDate;
      const v2090 = stdlib.lt(v2088, v1866);
      if (v2090) {
        const v2092 = await txn1.getOutput('Bidder_makeSell', 'v2090', ctc10, v2090);
        if (v596) {
          stdlib.protect(ctc0, await interact.out(v1992, v2092), {
            at: './Market.rsh:181:12:application',
            fs: ['at ./Market.rsh:181:12:application call to [unknown function] (defined at: ./Market.rsh:181:12:function exp)', 'at ./Market.rsh:195:13:application call to "fn" (defined at: ./Market.rsh:184:9:function exp)', 'at ./Market.rsh:184:9:application call to [unknown function] (defined at: ./Market.rsh:184:9:function exp)'],
            msg: 'out',
            who: 'Bidder_makeSell'
            });
          }
        else {
          }
        
        const v4091 = v2017;
        const v4092 = v2017[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
        const v4093 = v4092[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
        const v4094 = v4092[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
        const v4095 = stdlib.lt(v4093, v4094);
        if (v4095) {
          return;
          }
        else {
          const v4098 = stdlib.sub(v4093, v4093);
          const v4099 = stdlib.Array_set(v4092, '0', v4098);
          const v4100 = stdlib.Array_set(v2017, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4099);
          const v4101 = v4100[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
          const v4102 = v4101[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
          const v4103 = stdlib.sub(v4102, v4093);
          const v4104 = stdlib.Array_set(v4101, '1', v4103);
          const v4105 = stdlib.Array_set(v4100, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4104);
          undefined /* TokenBurn */;
          const v4106 = v4105[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
          const v4107 = v4106[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
          if (v4107) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }}}
      else {
        const v2099 = v2017[stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0')];
        const v2100 = v2099[stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0')];
        const v2104 = stdlib.sub(v2100, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
        const v2106 = stdlib.Array_set(v2099, '0', v2104);
        const v2107 = stdlib.Array_set(v2017, stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0'), v2106);
        ;
        const v2109 = await txn1.getOutput('Bidder_makeSell', 'v2090', ctc10, v2090);
        if (v596) {
          stdlib.protect(ctc0, await interact.out(v1992, v2109), {
            at: './Market.rsh:181:12:application',
            fs: ['at ./Market.rsh:181:12:application call to [unknown function] (defined at: ./Market.rsh:181:12:function exp)', 'at ./Market.rsh:195:13:application call to "fn" (defined at: ./Market.rsh:184:9:function exp)', 'at ./Market.rsh:184:9:application call to [unknown function] (defined at: ./Market.rsh:184:9:function exp)'],
            msg: 'out',
            who: 'Bidder_makeSell'
            });
          }
        else {
          }
        
        const v4109 = v2107;
        const v4110 = v2107[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
        const v4111 = v4110[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
        const v4112 = v4110[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
        const v4113 = stdlib.lt(v4111, v4112);
        if (v4113) {
          return;
          }
        else {
          const v4116 = stdlib.sub(v4111, v4111);
          const v4117 = stdlib.Array_set(v4110, '0', v4116);
          const v4118 = stdlib.Array_set(v2107, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4117);
          const v4119 = v4118[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
          const v4120 = v4119[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
          const v4121 = stdlib.sub(v4120, v4111);
          const v4122 = stdlib.Array_set(v4119, '1', v4121);
          const v4123 = stdlib.Array_set(v4118, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v4122);
          undefined /* TokenBurn */;
          const v4124 = v4123[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
          const v4125 = v4124[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
          if (v4125) {
            return;
            }
          else {
            undefined /* TokenDestroy */;
            return;
            }}}
      break;
      }
    }
  
  
  };
export async function Protocol(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Protocol expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Protocol expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Digest;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc5], ['Time', ctc3], ['ExtCID', ctc6], ['ExpiryDate', ctc3], ['TokenID', ctc7]]);
  const ctc9 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc10 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Hash', ctc5], ['Time', ctc3], ['ExtCID', ctc6]]);
  const ctc11 = stdlib.T_Tuple([ctc10, ctc1]);
  const ctc12 = stdlib.T_Struct([['AssetName', ctc1], ['AssetSymbol', ctc2], ['AssetType', ctc3], ['AssetValue', ctc3], ['OwnerAddress', ctc4], ['AdminAddress', ctc4], ['Time', ctc3], ['ExtCID', ctc6]]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Bidder_makeBid0_144: ctc13,
    Bidder_makePurchase0_144: ctc13
    });
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Tuple([ctc3, ctc3, ctc15]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Tuple([ctc7]);
  const ctc19 = stdlib.T_Data({
    Bidder_checkExpiry0_363: ctc18,
    Bidder_makeSell0_363: ctc18
    });
  
  const map0_ctc = ctc9;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v975 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v976 = [v975];
  const v980 = ctc.selfAddress();
  const v982 = stdlib.protect(ctc11, await interact.GetSale(), {
    at: './Market.rsh:47:54:application',
    fs: ['at ./Market.rsh:45:18:application call to [unknown function] (defined at: ./Market.rsh:45:22:function exp)'],
    msg: 'GetSale',
    who: 'Protocol'
    });
  const v983 = v982[stdlib.checkedBigNumberify('./Market.rsh:47:54:application', stdlib.UInt_max, '0')];
  const v984 = v982[stdlib.checkedBigNumberify('./Market.rsh:47:54:application', stdlib.UInt_max, '1')];
  const v985 = v983.AssetName;
  const v986 = v983.AssetSymbol;
  const v987 = v983.AssetType;
  const v988 = v983.AssetValue;
  const v989 = v983.OwnerAddress;
  const v990 = v983.AdminAddress;
  const v991 = v983.Hash;
  const v992 = v983.Time;
  const v993 = v983.ExtCID;
  const v1005 = {
    AdminAddress: v990,
    AssetName: v985,
    AssetSymbol: v986,
    AssetType: v987,
    AssetValue: v988,
    ExtCID: v993,
    OwnerAddress: v989,
    Time: v992
    };
  const v1006 = stdlib.digest([ctc12], [v1005]);
  const v1008 = stdlib.addressEq(v989, v980);
  const v1009 = stdlib.digestEq(v1006, v991);
  const v1010 = v1008 ? v1009 : false;
  stdlib.assert(v1010, {
    at: './Market.rsh:49:15:application',
    fs: ['at ./Market.rsh:45:18:application call to [unknown function] (defined at: ./Market.rsh:45:22:function exp)'],
    msg: 'Not the same',
    who: 'Protocol'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v983, v980, v984],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./Market.rsh:51:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10, ctc4, ctc1],
    pay: [stdlib.checkedBigNumberify('./Market.rsh:51:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1012, v1013, v1014], secs: v1016, time: v1015, didSend: v58, from: v1011 } = txn1;
      
      ;
      const v1017 = v1012.AssetName;
      const v1018 = v1012.AssetSymbol;
      const v1020 = v1012.AssetValue;
      const v1021 = v1012.OwnerAddress;
      const v1025 = v1012.ExtCID;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc4, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1012, v1013, v1014], secs: v1016, time: v1015, didSend: v58, from: v1011 } = txn1;
  ;
  const v1017 = v1012.AssetName;
  const v1018 = v1012.AssetSymbol;
  const v1019 = v1012.AssetType;
  const v1020 = v1012.AssetValue;
  const v1021 = v1012.OwnerAddress;
  const v1022 = v1012.AdminAddress;
  const v1023 = v1012.Hash;
  const v1024 = v1012.Time;
  const v1025 = v1012.ExtCID;
  const v1026 = {
    AdminAddress: v1022,
    AssetName: v1017,
    AssetSymbol: v1018,
    AssetType: v1019,
    AssetValue: v1020,
    ExtCID: v1025,
    OwnerAddress: v1021,
    Time: v1024
    };
  const v1027 = stdlib.digest([ctc12], [v1026]);
  const v1029 = stdlib.addressEq(v1021, v1013);
  const v1030 = stdlib.digestEq(v1023, v1027);
  const v1031 = v1029 ? v1030 : false;
  stdlib.assert(v1031, {
    at: './Market.rsh:53:12:application',
    fs: [],
    msg: 'Not the same',
    who: 'Protocol'
    });
  const txn2 = await (ctc.sendrecv({
    args: [v976, v1011, v1014, v1017, v1018, v1020, v1021, v1025],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1015,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./Market.rsh:56:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1034, time: v1033, didSend: v79, from: v1032 } = txn2;
      
      ;
      const v1036 = stdlib.simTokenNew(sim_r, v1017, v1018, v1025, v1014, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('./Market.rsh:59:21:decimal', stdlib.UInt_max, '0'), getSimTokCtr());
      const v1037 = await txn2.getOutput('internal', 'v1036', ctc7, v1036);
      const v1047 = v976[stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0')];
      const v1048 = stdlib.Array_set(v1047, '0', stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
      const v1049 = stdlib.Array_set(v976, stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0'), v1048);
      const v1051 = v1049[stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0')];
      const v1052 = stdlib.Array_set(v1051, '1', stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
      const v1053 = stdlib.Array_set(v1049, stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0'), v1052);
      const v1054 = v1053[stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0')];
      const v1055 = stdlib.Array_set(v1054, '2', false);
      const v1056 = stdlib.Array_set(v1053, stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0'), v1055);
      const v1073 = stdlib.digest([ctc3], [v1033]);
      const v1074 = await ctc.getContractInfo();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc17, ctc4, ctc1, ctc1, ctc2, ctc3, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1034, time: v1033, didSend: v79, from: v1032 } = txn2;
  ;
  const v1035 = stdlib.addressEq(v1011, v1032);
  stdlib.assert(v1035, {
    at: './Market.rsh:56:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Protocol'
    });
  const v1036 = undefined /* TokenNew */;
  const v1037 = await txn2.getOutput('internal', 'v1036', ctc7, v1036);
  const v1047 = v976[stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0')];
  const v1048 = stdlib.Array_set(v1047, '0', stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
  const v1049 = stdlib.Array_set(v976, stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0'), v1048);
  const v1051 = v1049[stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0')];
  const v1052 = stdlib.Array_set(v1051, '1', stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
  const v1053 = stdlib.Array_set(v1049, stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0'), v1052);
  const v1054 = v1053[stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0')];
  const v1055 = stdlib.Array_set(v1054, '2', false);
  const v1056 = stdlib.Array_set(v1053, stdlib.checkedBigNumberify('./Market.rsh:63:26:application', stdlib.UInt_max, '0'), v1055);
  const v1057 = v1056[stdlib.checkedBigNumberify('./Market.rsh:64:23:application', stdlib.UInt_max, '0')];
  const v1058 = v1057[stdlib.checkedBigNumberify('./Market.rsh:64:23:application', stdlib.UInt_max, '1')];
  const v1059 = stdlib.eq(v1058, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1059, {
    at: './Market.rsh:64:12:application',
    fs: [],
    msg: null,
    who: 'Protocol'
    });
  const v1061 = v1057[stdlib.checkedBigNumberify('./Market.rsh:65:20:application', stdlib.UInt_max, '0')];
  const v1062 = stdlib.eq(v1061, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v1062, {
    at: './Market.rsh:65:12:application',
    fs: [],
    msg: null,
    who: 'Protocol'
    });
  const v1067 = stdlib.eq(v1058, v1061);
  stdlib.assert(v1067, {
    at: './Market.rsh:66:12:application',
    fs: [],
    msg: null,
    who: 'Protocol'
    });
  const v1073 = stdlib.digest([ctc3], [v1033]);
  const v1074 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.PshowToken(v1037, v1020, v1074), {
    at: './Market.rsh:87:33:application',
    fs: ['at ./Market.rsh:87:33:application call to [unknown function] (defined at: ./Market.rsh:87:33:function exp)', 'at ./Market.rsh:87:33:application call to "liftedInteract" (defined at: ./Market.rsh:87:33:application)'],
    msg: 'PshowToken',
    who: 'Protocol'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v1011, v1020, v1021, v1033, v1037, v1056, v1073],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1033,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./Market.rsh:88:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1078, time: v1077, didSend: v116, from: v1076 } = txn3;
      
      ;
      
      const v1082 = stdlib.safeAdd(v1033, stdlib.checkedBigNumberify('./Market.rsh:90:55:decimal', stdlib.UInt_max, '120'));
      const v1083 = v1011;
      const v1084 = true;
      const v1085 = v1020;
      const v1086 = v1077;
      const v1087 = v1033;
      const v1092 = v1056;
      
      if (await (async () => {
        const v1106 = stdlib.gt(v1082, v1087);
        
        return v1106;})()) {
        sim_r.isHalt = false;
        }
      else {
        let v1270;
        if (v1084) {
          v1270 = stdlib.checkedBigNumberify('./Market.rsh:129:36:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1271 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1085, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
          v1270 = v1271;
          }
        let v1272;
        if (v1084) {
          v1272 = stdlib.checkedBigNumberify('./Market.rsh:130:38:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1273 = stdlib.safeSub(v1085, v1270);
          v1272 = v1273;
          }
        if (v1084) {
          const v1284 = v1092[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
          const v1285 = v1284[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
          const v1291 = stdlib.sub(v1285, v1285);
          const v1293 = stdlib.Array_set(v1284, '0', v1291);
          const v1294 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v1293);
          const v1295 = v1294[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
          const v1296 = v1295[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
          const v1297 = stdlib.sub(v1296, v1285);
          const v1299 = stdlib.Array_set(v1295, '1', v1297);
          const v1300 = stdlib.Array_set(v1294, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v1299);
          stdlib.simTokenBurn(sim_r, v1037, v1285);
          const v1301 = v1300[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
          const v1302 = v1301[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
          if (v1302) {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            stdlib.simTokenDestroy(sim_r, v1037);
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v1011,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v1011,
            tok: undefined /* Nothing */
            });
          const v1717 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v1718 = v1717[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
          const v1724 = stdlib.sub(v1718, v1718);
          const v1726 = stdlib.Array_set(v1717, '0', v1724);
          const v1727 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v1726);
          sim_r.txns.push({
            kind: 'from',
            to: v1083,
            tok: v1037
            });
          const v1785 = 'AE';
          const v1786 = true;
          null;
          const v1791 = v1086;
          const v1797 = v1727;
          
          if (await (async () => {
            const v1811 = v1797[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
            const v1812 = v1811[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
            const v1814 = v1811[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
            const v1815 = stdlib.lt(v1812, v1814);
            
            return v1815;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v2116 = v1797[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
            const v2117 = v2116[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
            const v2123 = stdlib.sub(v2117, v2117);
            const v2125 = stdlib.Array_set(v2116, '0', v2123);
            const v2126 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2125);
            const v2127 = v2126[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
            const v2128 = v2127[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
            const v2129 = stdlib.sub(v2128, v2117);
            const v2131 = stdlib.Array_set(v2127, '1', v2129);
            const v2132 = stdlib.Array_set(v2126, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2131);
            stdlib.simTokenBurn(sim_r, v1037, v2117);
            const v2133 = v2132[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
            const v2134 = v2133[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
            if (v2134) {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              stdlib.simTokenDestroy(sim_r, v1037);
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc3, ctc4, ctc3, ctc7, ctc17, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1078, time: v1077, didSend: v116, from: v1076 } = txn3;
  ;
  const v1079 = stdlib.addressEq(v1011, v1076);
  stdlib.assert(v1079, {
    at: './Market.rsh:88:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Protocol'
    });
  stdlib.protect(ctc0, await interact.AuctionStarted(), {
    at: './Market.rsh:89:37:application',
    fs: ['at ./Market.rsh:89:37:application call to [unknown function] (defined at: ./Market.rsh:89:37:function exp)', 'at ./Market.rsh:89:37:application call to "liftedInteract" (defined at: ./Market.rsh:89:37:application)'],
    msg: 'AuctionStarted',
    who: 'Protocol'
    });
  
  const v1082 = stdlib.safeAdd(v1033, stdlib.checkedBigNumberify('./Market.rsh:90:55:decimal', stdlib.UInt_max, '120'));
  let v1083 = v1011;
  let v1084 = true;
  let v1085 = v1020;
  let v1086 = v1077;
  let v1087 = v1033;
  let v1092 = v1056;
  
  let txn4 = txn3;
  while (await (async () => {
    const v1106 = stdlib.gt(v1082, v1087);
    
    return v1106;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc14],
      timeoutAt: ['time', v1082],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v1011, v1021, v1037, v1073, v1082, v1083, v1084, v1085, v1086, v1092],
        evt_cnt: 0,
        funcNum: 7,
        lct: v1086,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./Market.rsh:125:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1266, time: v1265, didSend: v287, from: v1264 } = txn6;
          
          ;
          const cv1083 = v1083;
          const cv1084 = v1084;
          const cv1085 = v1085;
          const cv1086 = v1265;
          const cv1087 = v1086;
          const cv1092 = v1092;
          
          await (async () => {
            const v1083 = cv1083;
            const v1084 = cv1084;
            const v1085 = cv1085;
            const v1086 = cv1086;
            const v1087 = cv1087;
            const v1092 = cv1092;
            
            if (await (async () => {
              const v1106 = stdlib.gt(v1082, v1087);
              
              return v1106;})()) {
              sim_r.isHalt = false;
              }
            else {
              let v1270;
              if (v1084) {
                v1270 = stdlib.checkedBigNumberify('./Market.rsh:129:36:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1271 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1085, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
                v1270 = v1271;
                }
              let v1272;
              if (v1084) {
                v1272 = stdlib.checkedBigNumberify('./Market.rsh:130:38:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1273 = stdlib.safeSub(v1085, v1270);
                v1272 = v1273;
                }
              if (v1084) {
                const v1284 = v1092[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                const v1285 = v1284[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                const v1291 = stdlib.sub(v1285, v1285);
                const v1293 = stdlib.Array_set(v1284, '0', v1291);
                const v1294 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v1293);
                const v1295 = v1294[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                const v1296 = v1295[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
                const v1297 = stdlib.sub(v1296, v1285);
                const v1299 = stdlib.Array_set(v1295, '1', v1297);
                const v1300 = stdlib.Array_set(v1294, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v1299);
                stdlib.simTokenBurn(sim_r, v1037, v1285);
                const v1301 = v1300[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
                const v1302 = v1301[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
                if (v1302) {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  stdlib.simTokenDestroy(sim_r, v1037);
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v1011,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1011,
                  tok: undefined /* Nothing */
                  });
                const v1717 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
                const v1718 = v1717[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
                const v1724 = stdlib.sub(v1718, v1718);
                const v1726 = stdlib.Array_set(v1717, '0', v1724);
                const v1727 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v1726);
                sim_r.txns.push({
                  kind: 'from',
                  to: v1083,
                  tok: v1037
                  });
                const v1785 = 'AE';
                const v1786 = true;
                null;
                const v1787 = v1727[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
                const v1788 = v1787[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
                const v1789 = stdlib.eq(v1788, stdlib.checkedBigNumberify('./Market.rsh:164:31:decimal', stdlib.UInt_max, '0'));
                ;
                const v1791 = v1086;
                const v1797 = v1727;
                
                if (await (async () => {
                  const v1811 = v1797[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
                  const v1812 = v1811[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
                  const v1814 = v1811[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
                  const v1815 = stdlib.lt(v1812, v1814);
                  
                  return v1815;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v2116 = v1797[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                  const v2117 = v2116[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                  const v2123 = stdlib.sub(v2117, v2117);
                  const v2125 = stdlib.Array_set(v2116, '0', v2123);
                  const v2126 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2125);
                  const v2127 = v2126[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
                  const v2128 = v2127[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
                  const v2129 = stdlib.sub(v2128, v2117);
                  const v2131 = stdlib.Array_set(v2127, '1', v2129);
                  const v2132 = stdlib.Array_set(v2126, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2131);
                  stdlib.simTokenBurn(sim_r, v1037, v2117);
                  const v2133 = v2132[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
                  const v2134 = v2133[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
                  if (v2134) {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    stdlib.simTokenDestroy(sim_r, v1037);
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc7, ctc5, ctc3, ctc4, ctc15, ctc3, ctc3, ctc17],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1266, time: v1265, didSend: v287, from: v1264 } = txn6;
      ;
      const v1267 = stdlib.addressEq(v1011, v1264);
      stdlib.assert(v1267, {
        at: './Market.rsh:125:21:dot',
        fs: ['at ./Market.rsh:124:37:application call to [unknown function] (defined at: ./Market.rsh:124:37:function exp)'],
        msg: 'sender correct',
        who: 'Protocol'
        });
      const cv1083 = v1083;
      const cv1084 = v1084;
      const cv1085 = v1085;
      const cv1086 = v1265;
      const cv1087 = v1086;
      const cv1092 = v1092;
      
      v1083 = cv1083;
      v1084 = cv1084;
      v1085 = cv1085;
      v1086 = cv1086;
      v1087 = cv1087;
      v1092 = cv1092;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v1141], secs: v1143, time: v1142, didSend: v229, from: v1140 } = txn5;
      switch (v1141[0]) {
        case 'Bidder_makeBid0_144': {
          const v1144 = v1141[1];
          undefined /* setApiDetails */;
          const v1149 = v1144[stdlib.checkedBigNumberify('./Market.rsh:112:10:spread', stdlib.UInt_max, '0')];
          ;
          const v1156 = stdlib.gt(v1149, v1085);
          stdlib.assert(v1156, {
            at: './Market.rsh:116:21:application',
            fs: ['at ./Market.rsh:115:10:application call to [unknown function] (defined at: ./Market.rsh:115:10:function exp)'],
            msg: 'Bid must be greater than asset value.',
            who: 'Protocol'
            });
          if (v1084) {
            await txn5.getOutput('Bidder_makeBid', 'v1037', ctc7, v1037);
            const v1176 = 'SB';
            null;
            const cv1083 = v1140;
            const cv1084 = false;
            const cv1085 = v1149;
            const cv1086 = v1142;
            const cv1087 = v1086;
            const cv1092 = v1092;
            
            v1083 = cv1083;
            v1084 = cv1084;
            v1085 = cv1085;
            v1086 = cv1086;
            v1087 = cv1087;
            v1092 = cv1092;
            
            txn4 = txn5;
            continue;}
          else {
            ;
            await txn5.getOutput('Bidder_makeBid', 'v1037', ctc7, v1037);
            const v1168 = 'SB';
            null;
            const cv1083 = v1140;
            const cv1084 = false;
            const cv1085 = v1149;
            const cv1086 = v1142;
            const cv1087 = v1086;
            const cv1092 = v1092;
            
            v1083 = cv1083;
            v1084 = cv1084;
            v1085 = cv1085;
            v1086 = cv1086;
            v1087 = cv1087;
            v1092 = cv1092;
            
            txn4 = txn5;
            continue;}
          break;
          }
        case 'Bidder_makePurchase0_144': {
          const v1204 = v1141[1];
          undefined /* setApiDetails */;
          const v1211 = v1204[stdlib.checkedBigNumberify('./Market.rsh:100:10:spread', stdlib.UInt_max, '0')];
          ;
          const v1240 = stdlib.addressEq(v1140, v1021);
          const v1241 = stdlib.eq(v1211, v1085);
          const v1242 = v1240 ? v1241 : false;
          stdlib.assert(v1242, {
            at: './Market.rsh:104:21:application',
            fs: ['at ./Market.rsh:103:10:application call to [unknown function] (defined at: ./Market.rsh:103:10:function exp)'],
            msg: 'You don\'t own this asset.',
            who: 'Protocol'
            });
          if (v1084) {
            const v1256 = 'SB';
            null;
            await txn5.getOutput('Bidder_makePurchase', 'v1037', ctc7, v1037);
            const cv1083 = v1140;
            const cv1084 = false;
            const cv1085 = v1211;
            const cv1086 = v1142;
            const cv1087 = v1086;
            const cv1092 = v1092;
            
            v1083 = cv1083;
            v1084 = cv1084;
            v1085 = cv1085;
            v1086 = cv1086;
            v1087 = cv1087;
            v1092 = cv1092;
            
            txn4 = txn5;
            continue;}
          else {
            ;
            const v1248 = 'SB';
            null;
            await txn5.getOutput('Bidder_makePurchase', 'v1037', ctc7, v1037);
            const cv1083 = v1140;
            const cv1084 = false;
            const cv1085 = v1211;
            const cv1086 = v1142;
            const cv1087 = v1086;
            const cv1092 = v1092;
            
            v1083 = cv1083;
            v1084 = cv1084;
            v1085 = cv1085;
            v1086 = cv1086;
            v1087 = cv1087;
            v1092 = cv1092;
            
            txn4 = txn5;
            continue;}
          break;
          }
        }}
    
    }
  let v1270;
  if (v1084) {
    v1270 = stdlib.checkedBigNumberify('./Market.rsh:129:36:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1271 = stdlib.safeMuldiv(stdlib.checkedBigNumberify('./JasiriTypes.rsh:59:24:decimal', stdlib.UInt_max, '30'), v1085, stdlib.checkedBigNumberify('./Market.rsh:129:66:decimal', stdlib.UInt_max, '100'));
    v1270 = v1271;
    }
  let v1272;
  if (v1084) {
    v1272 = stdlib.checkedBigNumberify('./Market.rsh:130:38:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1273 = stdlib.safeSub(v1085, v1270);
    v1272 = v1273;
    }
  if (v1084) {
    const v1284 = v1092[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
    const v1285 = v1284[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
    const v1291 = stdlib.sub(v1285, v1285);
    const v1293 = stdlib.Array_set(v1284, '0', v1291);
    const v1294 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v1293);
    const v1295 = v1294[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
    const v1296 = v1295[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
    const v1297 = stdlib.sub(v1296, v1285);
    const v1299 = stdlib.Array_set(v1295, '1', v1297);
    const v1300 = stdlib.Array_set(v1294, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v1299);
    undefined /* TokenBurn */;
    const v1301 = v1300[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
    const v1302 = v1301[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
    if (v1302) {
      return;
      }
    else {
      undefined /* TokenDestroy */;
      return;
      }}
  else {
    ;
    ;
    const v1717 = v1092[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
    const v1718 = v1717[stdlib.checkedBigNumberify('./Market.rsh:136:25:application', stdlib.UInt_max, '0')];
    const v1724 = stdlib.sub(v1718, v1718);
    const v1726 = stdlib.Array_set(v1717, '0', v1724);
    const v1727 = stdlib.Array_set(v1092, stdlib.checkedBigNumberify('./Market.rsh:136:38:application', stdlib.UInt_max, '0'), v1726);
    ;
    const v1785 = 'AE';
    const v1786 = true;
    null;
    const v1787 = v1727[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
    const v1788 = v1787[stdlib.checkedBigNumberify('./Market.rsh:164:22:application', stdlib.UInt_max, '0')];
    const v1789 = stdlib.eq(v1788, stdlib.checkedBigNumberify('./Market.rsh:164:31:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1789, {
      at: './Market.rsh:164:14:application',
      fs: [],
      msg: 'There should be no token in the contract at this stage',
      who: 'Protocol'
      });
    let v1791 = v1086;
    let v1797 = v1727;
    
    let txn5 = txn4;
    while (await (async () => {
      const v1811 = v1797[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
      const v1812 = v1811[stdlib.checkedBigNumberify('./Market.rsh:180:21:application', stdlib.UInt_max, '0')];
      const v1814 = v1811[stdlib.checkedBigNumberify('./Market.rsh:180:39:application', stdlib.UInt_max, '1')];
      const v1815 = stdlib.lt(v1812, v1814);
      
      return v1815;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc19],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1865], secs: v1867, time: v1866, didSend: v596, from: v1864 } = txn6;
      switch (v1865[0]) {
        case 'Bidder_checkExpiry0_363': {
          const v1868 = v1865[1];
          undefined /* setApiDetails */;
          ;
          const v1888 = v1797[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v1889 = v1888[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v1890 = stdlib.add(v1889, stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'));
          const v1892 = stdlib.Array_set(v1888, '0', v1890);
          const v1893 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0'), v1892);
          ;
          const v1895 = v1868[stdlib.checkedBigNumberify('./Market.rsh:198:11:spread', stdlib.UInt_max, '0')];
          const v1897 = stdlib.tokenEq(v1895, v1037);
          stdlib.assert(v1897, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./Market.rsh:168:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:202:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:201:9:application call to [unknown function] (defined at: ./Market.rsh:201:9:function exp)'],
            msg: 'Token not similar.',
            who: 'Protocol'
            });
          const v1899 = stdlib.addressEq(v1864, v1083);
          stdlib.assert(v1899, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./Market.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:202:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:201:9:application call to [unknown function] (defined at: ./Market.rsh:201:9:function exp)'],
            msg: 'You are not the highest bidder.',
            who: 'Protocol'
            });
          const v1901 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1864), null);
          const v1902 = '00000000000000000000000000000000';
          const v1903 = '00000000';
          const v1904 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v1905 = {
            AdminAddress: v1011,
            AssetName: v1902,
            AssetSymbol: v1903,
            AssetType: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            AssetValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExpiryDate: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExtCID: v1904,
            Hash: v1073,
            OwnerAddress: v1011,
            Time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            TokenID: v1037
            };
          const v1906 = stdlib.fromSome(v1901, v1905);
          const v1907 = v1906.ExpiryDate;
          const v1909 = stdlib.lt(v1907, v1866);
          if (v1909) {
            const v1910 = v1893[stdlib.checkedBigNumberify('./Market.rsh:206:26:application', stdlib.UInt_max, '0')];
            const v1911 = v1910[stdlib.checkedBigNumberify('./Market.rsh:206:26:application', stdlib.UInt_max, '0')];
            const v1913 = v1910[stdlib.checkedBigNumberify('./Market.rsh:206:43:application', stdlib.UInt_max, '1')];
            const v1914 = [v1911, v1913, true];
            await txn6.getOutput('Bidder_checkExpiry', 'v1914', ctc16, v1914);
            const cv1791 = v1866;
            const cv1797 = v1893;
            
            v1791 = cv1791;
            v1797 = cv1797;
            
            txn5 = txn6;
            continue;}
          else {
            const v1926 = v1893[stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0')];
            const v1927 = v1926[stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0')];
            const v1931 = stdlib.sub(v1927, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
            const v1933 = stdlib.Array_set(v1926, '0', v1931);
            const v1934 = stdlib.Array_set(v1893, stdlib.checkedBigNumberify('./Market.rsh:209:38:application', stdlib.UInt_max, '0'), v1933);
            ;
            const v1935 = v1934[stdlib.checkedBigNumberify('./Market.rsh:210:26:application', stdlib.UInt_max, '0')];
            const v1936 = v1935[stdlib.checkedBigNumberify('./Market.rsh:210:26:application', stdlib.UInt_max, '0')];
            const v1938 = v1935[stdlib.checkedBigNumberify('./Market.rsh:210:43:application', stdlib.UInt_max, '1')];
            const v1939 = [v1936, v1938, false];
            await txn6.getOutput('Bidder_checkExpiry', 'v1939', ctc16, v1939);
            const cv1791 = v1866;
            const cv1797 = v1934;
            
            v1791 = cv1791;
            v1797 = cv1797;
            
            txn5 = txn6;
            continue;}
          break;
          }
        case 'Bidder_makeSell0_363': {
          const v1992 = v1865[1];
          undefined /* setApiDetails */;
          ;
          const v2012 = v1797[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v2013 = v2012[stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0')];
          const v2014 = stdlib.add(v2013, stdlib.checkedBigNumberify('./Market.rsh:200:20:decimal', stdlib.UInt_max, '1'));
          const v2016 = stdlib.Array_set(v2012, '0', v2014);
          const v2017 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:165:35:dot', stdlib.UInt_max, '0'), v2016);
          ;
          const v2076 = v1992[stdlib.checkedBigNumberify('./Market.rsh:181:11:spread', stdlib.UInt_max, '0')];
          const v2078 = stdlib.tokenEq(v2076, v1037);
          stdlib.assert(v2078, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./Market.rsh:168:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:185:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:184:9:application call to [unknown function] (defined at: ./Market.rsh:184:9:function exp)'],
            msg: 'Token not similar.',
            who: 'Protocol'
            });
          const v2080 = stdlib.addressEq(v1864, v1083);
          stdlib.assert(v2080, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./Market.rsh:169:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./Market.rsh:185:24:application call to "PerformChecks" (defined at: ./Market.rsh:167:40:function exp)', 'at ./Market.rsh:184:9:application call to [unknown function] (defined at: ./Market.rsh:184:9:function exp)'],
            msg: 'You are not the highest bidder.',
            who: 'Protocol'
            });
          const v2082 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1864), null);
          const v2083 = '00000000000000000000000000000000';
          const v2084 = '00000000';
          const v2085 = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
          const v2086 = {
            AdminAddress: v1011,
            AssetName: v2083,
            AssetSymbol: v2084,
            AssetType: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            AssetValue: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExpiryDate: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            ExtCID: v2085,
            Hash: v1073,
            OwnerAddress: v1011,
            Time: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            TokenID: v1037
            };
          const v2087 = stdlib.fromSome(v2082, v2086);
          const v2088 = v2087.ExpiryDate;
          const v2090 = stdlib.lt(v2088, v1866);
          if (v2090) {
            await txn6.getOutput('Bidder_makeSell', 'v2090', ctc15, v2090);
            const cv1791 = v1866;
            const cv1797 = v2017;
            
            v1791 = cv1791;
            v1797 = cv1797;
            
            txn5 = txn6;
            continue;}
          else {
            const v2099 = v2017[stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0')];
            const v2100 = v2099[stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0')];
            const v2104 = stdlib.sub(v2100, stdlib.checkedBigNumberify('./Market.rsh:58:20:decimal', stdlib.UInt_max, '1'));
            const v2106 = stdlib.Array_set(v2099, '0', v2104);
            const v2107 = stdlib.Array_set(v2017, stdlib.checkedBigNumberify('./Market.rsh:192:36:application', stdlib.UInt_max, '0'), v2106);
            ;
            await txn6.getOutput('Bidder_makeSell', 'v2090', ctc15, v2090);
            const cv1791 = v1866;
            const cv1797 = v2107;
            
            v1791 = cv1791;
            v1797 = cv1797;
            
            txn5 = txn6;
            continue;}
          break;
          }
        }
      
      }
    const v2116 = v1797[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
    const v2117 = v2116[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
    const v2123 = stdlib.sub(v2117, v2117);
    const v2125 = stdlib.Array_set(v2116, '0', v2123);
    const v2126 = stdlib.Array_set(v1797, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2125);
    const v2127 = v2126[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0')];
    const v2128 = v2127[stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '1')];
    const v2129 = stdlib.sub(v2128, v2117);
    const v2131 = stdlib.Array_set(v2127, '1', v2129);
    const v2132 = stdlib.Array_set(v2126, stdlib.checkedBigNumberify('./Market.rsh:14:12:application', stdlib.UInt_max, '0'), v2131);
    undefined /* TokenBurn */;
    const v2133 = v2132[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '0')];
    const v2134 = v2133[stdlib.checkedBigNumberify('./Market.rsh:15:21:application', stdlib.UInt_max, '2')];
    if (v2134) {
      return;
      }
    else {
      undefined /* TokenDestroy */;
      return;
      }}
  
  
  
  
  
  };
export async function Bidder_checkExpiry(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_checkExpiry expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_checkExpiry expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Bidder_checkExpiry9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_makeBid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_makeBid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_makeBid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 10) {return _Bidder_makeBid10(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_makePurchase(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_makePurchase expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_makePurchase expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 10) {return _Bidder_makePurchase10(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_makeSell(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_makeSell expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_makeSell expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Bidder_makeSell9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_checkExpiry(uint64)(uint64,uint64,byte)`, `Bidder_makeBid(uint64)uint64`, `Bidder_makePurchase(uint64)uint64`, `Bidder_makeSell(uint64)byte`],
    pure: [],
    sigs: [`Bidder_checkExpiry(uint64)(uint64,uint64,byte)`, `Bidder_makeBid(uint64)uint64`, `Bidder_makePurchase(uint64)uint64`, `Bidder_makeSell(uint64)byte`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 3,
  LocalNumUint: 0,
  appApproval: `ByAWAAEIBCCAAgIDCpEC94/JjASmva3jBISegvwCBQdoQJEBmQEJkAKgjQYmCgEAAQEBAggAAAAAAAAEDQaEUaI4U0IAODAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAYDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAgAAAAAAAAIKggAAAAAAAAAASI1ADEYQQk0JwVkSSJbNQEkWzUCMRkjEkEAJTEAIQmvSwEoSwJXAH9mSwEpSwJXf39mSwEqSwJX/hNmSEhCCOU2GgAXSUEAXiI1BCM1BkkhCgxAACdJIQsMQAAQIQsSRDYaATX/KTT/UEICSiEKEkQ2GgE1/yg0/1BCALpJIQwMQAAQIQwSRDYaATX/KTT/UEIAo4GA0aZLEkQ2GgE1/yg0/1BCAhA2GgIXNQQ2GgM2GgEXSSENDEAEG0mBBgxAAfRJIQ4MQABtIQ4SRCEINAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hD1s1/oAE4huzqbAyBjT+D0Q0/zEAEkQ0/zQDVyAgNAMhEFs0A1dIIDT+NANXcCA0A1eQARc0AyERWzIGNAMhEls0A1ehEUIF4kghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpXACA1/1cgIDX+IRBbNf1XSCA1/CEPWzX7V3AgNfpXkAEXNfkhEVs1+CESWzX3V6ERNfZJNQU19YAEFAzmCDT1ULAyBjT7DEQ09SJVQACGNPVXAQg19DT0FzXzNPOIB8I08zT4DUQ0+UEALSs0/RZQsDT9FjUHJwQxAFA08xZQsDT/NP40/TT8NPsxACI08zIGNPc09kIFK7EisgE0+LIII7IQNPqyB7MrNP0WULA0/RY1BycEMQBQNPMWULA0/zT+NP00/DT7MQAiNPMyBjT3NPZCBO409VcBCDX0NPQXNfM084gHPDEANP4SNPM0+BIQRDT5QQAtJwQxAFA08xZQsCs0/RZQsDT9FjUHNP80/jT9NPw0+zEAIjTzMgY09zT2QgSfsSKyATT4sggjshA0+rIHsycEMQBQNPMWULArNP0WULA0/RY1BzT/NP40/TT8NPsxACI08zIGNPc09kIEYkghEzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/lcoIDX9V0ggNfxXaBE1+0k1BTX6gAQArHLNNPpQsDT6IlVAAQk0+lcBCDX5NPtXABE1+DT7NPhJIlsjCBZcAFwANfcjNP6IBmw0+Rc0/hJEMQA0/BJEJwY0/1A0/1A0/VAkr1AnB1Akr1A0/hZQMQCIBg5JNfYjIRRYNPYiVU0hBVsyBgxBAD4091cAETX2gAgAAAAAAAAHejT2VwAINPZXCAhQKVBQsDT2VwAINPZXCAhQKVA1BzT/NP40/TT8MgY090IEyDT3VwARNfY09zT2SSJbIwkWXABcADX1sSKyASOyEiWyEDEAshQ0/rIRszT1VwARNfSACAAAAAAAAAeTNPRXAAg09FcICFAoUFCwNPRXAAg09FcICFAoUDUHNP80/jT9NPwyBjT1QgRgNPpXAQg1+TT7VwARNfg0+zT4SSJbIwgWXABcADX3IzT+iAVjNPkXNP4SRDEANPwSRCcGNP9QNP9QNP1QJK9QJwdQJK9QNP4WUDEAiAUFSTX1IyEUWDT1IlVNIQVbMgYMSTX2QQAhJwg09hZRBwhQsDT2FlEHCDUHNP80/jT9NPwyBjT3QgPZNPdXABE19bEisgEjshIlshAxALIUNP6yEbMnCDT2FlEHCFCwNPYWUQcINQc0/zT+NP00/DIGNPc09UkiWyMJFlwAXABCA5JJIwxAAW1JIQYMQABfIQYSRCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BSFs1/oAEQbFATbA0/zEAEkQ0/zQDVyggNAOBUFs0A1dpIDT+gXgINP8jNAMhBFsyBjT+NANXWBFCAdZIIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDSUpXABE1/1cRIDX+gXlbNf1XgSA1/IAEmouRdLA0/jEAEkQhFYgD8bEisgEhB7IQI7IiIrIjNANXcQiyJTQDV1EgsiY0A1ehYLInNANXMSCyKDIKsimztDw1+4AIAAAAAAAABAw0+xZQsDT7Nfo0/0lXABEnCVwAXABJNflJVwARJwlcCFwASTX4SVcAEShcEFwASTX3VwARSTX2JFtJNfUjEkQ09iJbSTX0IxJENPU09BJEMgYWATXzNP40/RZQNPxQMgYWUDT6FlA091A081AoSwFXAH9nKUsBV38KZ0ghBjUBMgY1AkICv0ghFYgDKCI0ARJENARJIhJMNAISEURJNQVJSSIhBVg1/yEFIQRYNf6BoAIhBFg1/YAEFx3P1DT/UDT+UDT9ULCBEa81/DT/VwAgNfs0/1cgCDX6NP+BMFs1+TT/VzggNfg0/1egYDX3NPg0/hI0/1d4IDT7NPpQNP9XKAhQNPkWUDT4UDT/V1ggUDT/V5gIUDT3UAESEEQ0/DEAUDT9UDT7UDT6UDT5FlA0+FA091AoSwFXAH9nKUsBV39/ZypLAVf+A2dIIzUBMgY1AkIB8DX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0+TT+DUEAPzT1NPZQNPcWUDT4UDT5FlA0+lA0+xZRBwhQNPwWUDT9FlA0/1AoSwFXAH9nKUsBV38zZ0ghCDUBMgY1AkIBkzT7QQAGIjX0QgAKgR40/B2BZJc19DT7QQAGIjXzQgAHNPw09Ak18zT7QQBNNP9XABFJNfIiWzXxNP808jTxSQkWXABcAEk18FcAETXvNPA070kkWzTxCRZcCFwAVwARVxABF0EAA0IBDrEisgEhB7IQNPeyIbNCAP6xIrIBNPSyCCOyEDT1sgezsSKyATTzsggjshA09bIHszT/VwARSTXyIls18TT/NPI08UkJFlwAXAA18LEisgE08bISJbIQNPqyFDT3shGzgAbrB0vRQUU0+lA0/BZQKVCwNPBXABEiWyISRDT1NPc0+DT6NP008EIAADX/Nf41/TX8Nfs1+jT/VwARSTX5IltJNfg0+SRbDEEAIjT6NPsWUDT8UDT9UDT/UChLAVcAeWdIIRM1ATIGNQJCAF00/zT5NPhJCRZcAFwASTX3VwARNfY09zT2SSRbNPgJFlwIXABXABFXEAEXQQADQgAQsSKyASEHshA0+7Ihs0IAADEZIQ0SRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcFNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCEHMTcSRCI1ASI1AkL/rUkxGGFAAAVIIQmviUkoYksBKWJQSwEqYlBMSIk0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 3,
  mapDataSize: 273,
  stateKeys: 3,
  stateSize: 257,
  unsupported: [],
  version: 11,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"AssetName","type":"bytes32"},{"internalType":"bytes8","name":"AssetSymbol","type":"bytes8"},{"internalType":"uint256","name":"AssetType","type":"uint256"},{"internalType":"uint256","name":"AssetValue","type":"uint256"},{"internalType":"address payable","name":"OwnerAddress","type":"address"},{"internalType":"address payable","name":"AdminAddress","type":"address"},{"internalType":"uint256","name":"Hash","type":"uint256"},{"internalType":"uint256","name":"Time","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"ExtCID","type":"tuple"}],"internalType":"struct T10","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"internalType":"struct T11","name":"v4147","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes2","name":"v0","type":"bytes2"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"bool","name":"v3","type":"bool"}],"name":"MarketView_auctionEnd","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes2","name":"v0","type":"bytes2"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"MarketView_showBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"AssetName","type":"bytes32"},{"internalType":"bytes8","name":"AssetSymbol","type":"bytes8"},{"internalType":"uint256","name":"AssetType","type":"uint256"},{"internalType":"uint256","name":"AssetValue","type":"uint256"},{"internalType":"address payable","name":"OwnerAddress","type":"address"},{"internalType":"address payable","name":"AdminAddress","type":"address"},{"internalType":"uint256","name":"Hash","type":"uint256"},{"internalType":"uint256","name":"Time","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"ExtCID","type":"tuple"}],"internalType":"struct T10","name":"elem1","type":"tuple"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"bytes32","name":"elem3","type":"bytes32"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Bidder_checkExpiry0_363","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Bidder_makeSell0_363","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Bidder_makeBid0_144","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Bidder_makePurchase0_144","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v1036","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"}],"name":"_reach_oe_v1037","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"bool","name":"elem2","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v1914","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"bool","name":"elem2","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v1939","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2090","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v4126","type":"address"}],"name":"Bidder_checkExpiry","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"bool","name":"elem2","type":"bool"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4131","type":"uint256"}],"name":"Bidder_makeBid","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4136","type":"uint256"}],"name":"Bidder_makePurchase","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v4141","type":"address"}],"name":"Bidder_makeSell","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"bytes32","name":"AssetName","type":"bytes32"},{"internalType":"bytes8","name":"AssetSymbol","type":"bytes8"},{"internalType":"uint256","name":"AssetType","type":"uint256"},{"internalType":"uint256","name":"AssetValue","type":"uint256"},{"internalType":"address payable","name":"OwnerAddress","type":"address"},{"internalType":"address payable","name":"AdminAddress","type":"address"},{"internalType":"uint256","name":"Hash","type":"uint256"},{"internalType":"uint256","name":"Time","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"}],"internalType":"struct T0","name":"ExtCID","type":"tuple"},{"internalType":"uint256","name":"ExpiryDate","type":"uint256"},{"internalType":"address payable","name":"TokenID","type":"address"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v4149","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v4151","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Bidder_checkExpiry0_363","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Bidder_makeSell0_363","type":"tuple"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v4161","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Bidder_makeBid0_144","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Bidder_makePurchase0_144","type":"tuple"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v4171","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"v4197","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x620058e838819003906080601f8301601f1916810191906001600160401b03831190831017620007575782916040526080396101c08112620008145760405190608082016001600160401b0381118382101762000757576040526080518252610160601f1982011262000814576040519061012082016001600160401b03811183821017620007575760405260a051825260c051906001600160c01b0319821682036200081457606091602084015281608001516040840152608080015182840152620000d060a060800162000852565b6080840152620000e261014062000852565b60a08401526101605160c08401526101805160e084015261011f1901126200081457604051620001128162000819565b6101a05181526101c0516020808301919091526101e05160408301526101008301919091528201526200014761020062000852565b604082810191909152610220516060830152436003555160a081016001600160401b0381118282101762000757576000916080916040528281526200018b62000867565b60208201528260408201528260608201520152604051620001ac8162000819565b620001b662000867565b8152620001c262000888565b6020820152604051620001d58162000835565b6000815260006020820152600060408201526000606082015260006080820152600060a0820152600060c08201526200020d62000867565b60e0820152604082015260ff60045416620007fb577f2ac0926c9907474a8d1aa714d3361398b69ce31c8274c88c9a1c1588b2a632696101e060405133815284516020820152620002d361010060208701518051604085015260018060c01b0319602082015116606085015260408101516080850152606081015160a085015260018060a01b0360808201511660c085015260018060a01b0360a08201511660e085015260c08101518285015260e08101516101208501520151610140830190620008cf565b60408501516001600160a01b03166101a082015260608501516101c0820152a181518015908115620007ee575b5015620007d557600081515260006020825101526000604082510152805160208201515234620007bc5760208281018051516040848101805192909252825184015182516001600160c01b0319909116940193909352815183015181518401528151606090810151825190910152815160809081015182516001600160a01b0391821690830152835160a0908101518451908316910152835160e090810151845160c001528451610100015193510192909252915191820151928501519192918116911603620007b35760c0015160408201516200044660e0604051928051602085015260018060c01b03196020820151166040850152604081015160608501526060810151608085015260018060a01b0360808201511660a085015260018060a01b0360a08201511660c085015260c0810151828501520151610100830190620008cf565b61014081526001600160401b036101608201908111908211176200075757610160810160405260208151910120145b156200079a5761010060208060405193620004908562000835565b6200049a62000888565b8552600082860152600060408601526000606086015260006080860152600060a0860152600060c0860152620004cf62000867565b60e08601520151938484523382850152606081015160408501528181015151606085015260018060c01b031982808301510151166080850152606082820151015160a085015260018060a01b0360808383015101511660c08501520151015160e082015260016000554360015560405191602083016000905b600182106200076d5784620005bd60e08660018060a01b036020820151166080850152604081015160a0850152606081015160c085015260018060c01b03196080820151168285015260a081015161010085015260018060a01b0360c0820151166101208501520151610140830190620008cf565b61018081526101a081016001600160401b03811182821017620007575760405280516001600160401b0381116200075757600254600181811c911680156200074c575b60208210146200073657601f8111620006cc575b50602091601f8211600114620006625791819260009262000656575b50508160011b916000199060031b1c1916176002555b604051614fff9081620008e98239f35b01519050828062000630565b601f19821692600260005260206000209160005b858110620006b35750836001951062000699575b505050811b0160025562000646565b015160001960f88460031b161c191690558280806200068a565b9192602060018192868501518155019401920162000676565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200072b575b601f0160051c01905b8181106200071e575062000614565b600081556001016200070f565b909150819062000706565b634e487b7160e01b600052602260045260246000fd5b90607f169062000600565b634e487b7160e01b600052604160045260246000fd5b60206060600192604086518051835284810151858401520151151560408201520193019101909162000548565b60405163100960cb60e01b8152600a6004820152602490fd5b50600062000475565b60405163100960cb60e01b815260096004820152602490fd5b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000300565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b606081019081106001600160401b038211176200075757604052565b61010081019081106001600160401b038211176200075757604052565b51906001600160a01b03821682036200081457565b60405190620008768262000819565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000757576040528260005b828110620008b857505050565b8290620008c462000867565b8184015201620008ab565b604080918051845260208101516020850152015191015256fe608060405260043610156200001a575b36156200001857005b005b60003560e01c80631e93b0f114620001445780632f132302146200013957806336e56ea5146200012e578063573b8510146200012357806383230757146200011857806397953829146200010d578063a8c5c5f71462000102578063ab53f2c614620000f7578063b7094f5914620000ec578063b978089514620000e1578063e5bb4b1914620000d6578063eb94e98514620000cb5763f5a239bc036200000f57620000c562000d24565b6200000f565b50620000c562000ca3565b50620000c562000c44565b50620000c562000bd5565b50620000c562000b1b565b50620000c562000adb565b50620000c5620009f2565b50620000c562000950565b50620000c562000900565b50620000c5620004cb565b50620000c5620003b6565b50620000c56200017c565b50346200016557600036600319011262000165576020600354604051908152f35b600080fd5b60209060031901126200016557600490565b506200034d620001a362000190366200016a565b6200019a62001372565b50369062003b97565b620001c2620001bc620001b860045460ff1690565b1590565b62002076565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d40160405180620001f484338362003c06565b0390a162000207600a6000541462002097565b6200023d620002296200021962000ffb565b60208082518301019101620028e2565b915180159081156200035d575b50620020b8565b6080810190620002518251431015620020d9565b6200025d3415620020fa565b6200027d3360018060a01b036200027584516200036a565b16146200211b565b62000287620029cb565b916200029f6200029883516200036a565b84620011dd565b620002bc620002b260208401516200036a565b60208501620011dd565b620002d9620002cf60408401516200036a565b60408501620011dd565b6060820151606084015251608083015262000306620002fc60a08301516200036a565b60a08401620011dd565b620003216200031860c0830151151590565b151560c0840152565b60e081015160e083015261010043818401528101519061012091828401520151610140820152620033d1565b60405160008152602090f35b0390f35b9050600154143862000236565b6001600160a01b031690565b6001600160a01b038116036200016557565b600211156200039357565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03169052565b50346200016557602036600319011262000165576101e0620003f0600435620003df8162000376565b620003e9620011b1565b5062001216565b620004c960408051928051620004068162000388565b845260208181015115158186015291015180516040850152908101516001600160c01b031916606084015260408101516080840152606081015160a084015262000459608082015160c0850190620003a9565b6200046d60a082015160e0850190620003a9565b60c081015190610100918285015260e081015191610120928386015281015191620004b261014093848701906040809180518452602081015160208501520151910152565b8101516101a085015201516101c0830190620003a9565bf35b50620004db62000190366200016a565b620004e562003bb8565b9062000501620004fb620001b860045460ff1690565b6200213c565b620005d26040927fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968451806200053986338362003c06565b0390a16001906200054e82600054146200215d565b6200055862000ffb565b91620005876200057360209485808251830101910162003c6b565b95518015908115620008f4575b506200217e565b6200059334156200219f565b8285019460018060a01b03620005b83382620005b08a516200036a565b1614620021c0565b6200061a6060830151895197889188830160209181520190565b0396620005e8601f199889810183528262000fd7565b608084015162000627906001600160c01b0319168b516001600160c01b03199091168982019081529093849160080190565b0389810184528362000fd7565b6200069d620006646200064a8c60e08801518051918c8201519101519162003d00565b620006718d8089015190519384918d830160209181520190565b038c810184528362000fd7565b8c51948594611002808701906001600160401b03821188831017620008e4575b62003f51883962003d25565b03906000f08015620008d4575b16620006b79084620011dd565b8251620006c4906200036a565b9084840191620006d59083620011dd565b8351620006e2906200036a565b8851620006f181928262000bc2565b037f7d18cd7bfe0297568d1379bdf99c13ab37abd6121a1d384d0dbc632bba173b8e91a180518051898782015191015115156200072d620010b1565b8681528881019290925215158a8201526200074891620027de565b80898601528051898151910151151562000761620010b1565b91825287820186905215158a8201526200077b91620027de565b806060860152805186815191015162000793620010b1565b9182528782015260008a820152620007ab91620027de565b928086608087019580875251015114620007c590620021e1565b8351515114620007d59062002202565b82515185810151905114620007ea9062002223565b8751438682019081529080602083010388810182526200080b908262000fd7565b5190209360a0019384526200081f62003d86565b96516200082c906200036a565b620008389088620011dd565b60a08101518588015260c0015162000850906200036a565b6200085e90878901620011dd565b4360608701525162000870906200036a565b6200087f9060808701620011dd565b5160a08501525160c0840152620008966002600055565b436001558351928391820190620008ad9162003de9565b039081018252620008bf908262000fd7565b620008ca90620032de565b5160008152602090f35b620008de62002992565b620006aa565b620008ee62000eec565b62000691565b90508254143862000580565b50346200016557600036600319011262000165576020600154604051908152f35b60408091805184526020810151602085015201511515910152565b6060810192916200094e919062000921565b565b506020366003190112620001655760606020600435620009708162000376565b6200097a62001132565b50620009cf6200098962001372565b80926200099562001400565b80516001600160a01b0390921690915284810180516000905290518151860152620009bf62001430565b9060008252518582015262001757565b0151620004c9604051809262000921565b60809060031901126200016557600490565b506080366003190112620001655762000a0b36620009e0565b62000a1562001372565b81360360808112620001655760606040519162000a328362000f03565b84358352601f19011262000165576200034d9262000a896040519162000a588362000f2e565b602081013562000a688162003f19565b835262000a79366040830162003b97565b6020840152606036910162003b97565b6040820152602082015262002a24565b919082519283825260005b84811062000ac6575050826000602080949584010152601f8019910116010190565b60208183018101518483018201520162000aa4565b503462000165576000366003190112620001655760005462000afc62000ffb565b9062000359604051928392835260406020840152604083019062000a99565b506080366003190112620001655762000b3436620009e0565b62000b3e62001372565b81360360808112620001655760606040519162000b5b8362000f03565b84358352601f19011262000165576200034d9262000bb26040519162000b818362000f2e565b602081013562000b918162003f19565b835262000ba2366040830162003f24565b6020840152606036910162003f24565b6040820152602082015262001757565b6001600160a01b03909116815260200190565b5060203660031901126200016557602062000bef62001372565b62000c2d8162000bfe62001400565b60043581515284810190600082515251858251015262000c1d62001430565b9060008252518582015262002a24565b60409081015190516001600160a01b039091168152f35b5060203660031901126200016557602062000c5e62001372565b62000c8d8162000c6d62001400565b6004358151528481019060018251525160408251015262000c1d62001430565b606001516040516001600160a01b039091168152f35b50602036600319011262000165576020608060043562000cc38162000376565b62000d1862000cd162001372565b809262000cdd62001400565b80516001600160a01b03909216909152858101805160019052905181516040015262000d0862001430565b9060008252518682015262001757565b01511515604051908152f35b506200034d62000d3862000190366200016a565b62000d5362000d4d620001b860045460ff1690565b62002244565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a6040518062000d8584338362003c06565b0390a162000d9860026000541462002265565b62000dce62000dba62000daa62000ffb565b6020808251830101910162003e4a565b9151801590811562000ea2575b5062002286565b62000dda3415620022a7565b62000dfa3360018060a01b0362000df284516200036a565b1614620022c8565b60a062000e06620029cb565b9162000e176200029882516200036a565b62000e2a620002b260408301516200036a565b62000e3d620002cf60808301516200036a565b60c081015160608401526060810162000e57815162003ef1565b608085015262000e7562000e6c83516200036a565b848601620011dd565b600160c0850152602082015160e085015243610100850152516101208401520151610140820152620033d1565b9050600154143862000dc7565b90600182811c9216801562000ee1575b602083101462000ecb57565b634e487b7160e01b600052602260045260246000fd5b91607f169162000ebf565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111762000f1f57604052565b62000f2962000eec565b604052565b606081019081106001600160401b0382111762000f1f57604052565b61016081019081106001600160401b0382111762000f1f57604052565b60a081019081106001600160401b0382111762000f1f57604052565b602081019081106001600160401b0382111762000f1f57604052565b60c081019081106001600160401b0382111762000f1f57604052565b608081019081106001600160401b0382111762000f1f57604052565b601f909101601f19168101906001600160401b0382119082101762000f1f57604052565b6040519060008260025491620010118362000eaf565b8083526001938085169081156200108e57506001146200103b575b506200094e9250038362000fd7565b6002600090815260008051602062004f5383398151915294602093509091905b818310620010755750506200094e9350820101386200102c565b855488840185015294850194879450918301916200105b565b90506200094e94506020925060ff191682840152151560051b820101386200102c565b604051906200094e8262000f2e565b604051906200094e8262000f4a565b6040519061020082016001600160401b0381118382101762000f1f57604052565b6040519061014082016001600160401b0381118382101762000f1f57604052565b6040519061010082016001600160401b0381118382101762000f1f57604052565b60405190620011418262000f2e565b60006040838281528260208201520152565b60405190620011628262000f4a565b816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152620011a062001132565b610100820152826101208201520152565b60405190620011c08262000f2e565b8160008152600060208201526040620011d862001153565b910152565b6001600160a01b039091169052565b90604051620011fb8162000f2e565b60406002829480548452600181015460208501520154910152565b9062001221620011b1565b9160018060a01b03166000908082526005602052600160ff6040842054166200124a8162000388565b03620013675760409293508152600560205220604051906200126c8262000f2e565b60ff81548181166200127e8162000388565b845260081c16151560208301526200135f62001354600d6200129f620010c0565b9360018101548552620012cb620012ba600283015460c01b90565b6001600160c01b0319166020870152565b6003810154604086015260048101546060860152620012fc620012f260058301546200036a565b60808701620011dd565b620013196200130f60068301546200036a565b60a08701620011dd565b600781015460c0860152600881015460e08601526200133b60098201620011ec565b610100860152600c81015461012086015201546200036a565b6101408301620011dd565b604082015290565b508083526020830152565b60405190620013818262000f67565b60006080838281526200139362001132565b60208201528260408201528260608201520152565b60405190620013b78262000f83565b60008252565b60405190620013cc8262000f2e565b8160008152604051620013df8162000f83565b6000815260208201526040805191620013f88362000f83565b600083520152565b604051906200140f8262000f03565b816040516200141e8162000f83565b6000815281526020620011d8620013bd565b604051906200143f8262000f03565b81600081526020620011d8620013bd565b604051906200145f8262000f83565b8160005b6020811062001470575050565b6020906200147d62001132565b818401520162001463565b62001492620010cf565b906200149d620013a8565b8252620014a962001450565b60208301526000604083015260006060830152620014c662001132565b6080830152620014d562001153565b60a0830152620014e462001132565b60c0830152620014f362001450565b60e08301526200150262001132565b61010083015262001512620013a8565b6101208301526200152262001450565b610140830152600061016083015260006101808301526200154262001132565b6101a08301526200155262001153565b6101c083015260006101e0830152565b906080909392936040602060a085019660018060a01b03809416865280518287015201518051620015938162000388565b828601528260208201515116606086015201515116910152565b51906200094e8262000376565b519081151582036200016557565b9080601f830112156200016557604091825192620015e68462000f83565b83606093848401938185116200016557915b848310620016095750505050505090565b8583830312620001655783518691620016228262000f2e565b8451825260209182860151838201526200163e878701620015ba565b87820152815201920191620015f8565b9060e082820312620001655760405191620016cc919060809060a085016001600160401b03811186821017620016d4575b60405280516200168f8162000376565b85526020810151620016a18162000376565b6020860152604081015160408601526060810151620016c08162000376565b606086015201620015c8565b608082015290565b620016de62000eec565b6200167f565b51620016f08162000388565b90565b906001811015620017055760051b0190565b634e487b7160e01b600052603260045260246000fd5b604051906200172a8262000f9f565b81600081526000602082015260006040820152600060608201526000608082015260a0620011d862001450565b906200176262001488565b6200177d62001777620001b860045460ff1690565b620022e9565b60407f75376cccc9e2af25408d2e12881ac1e6c4891bdf1c131eb2145a24a6266c611f815180620017b087338362001562565b0390a16000620017c460098254146200230a565b620017e6620017d262000ffb565b60209181838080945183010191016200164e565b96620017ff8151801590811562002069575b506200232b565b016200180c8151620016e4565b620018178162000388565b62001c37575181015184526200182e3415620023d0565b6200186e608087015180519062001868600183510192878682015191015115159062001859620010b1565b94855286850152151587840152565b620027de565b94818501958652818701906200189a620018946200188d84516200036a565b3362002764565b620023f1565b855151620018d3906001600160a01b0316620018c1620018bb85516200036a565b6200036a565b6001600160a01b039091161462002412565b6060880195620018f4620018ec620018bb89516200036a565b331462002433565b85810160008051602062004f93833981519152958682526200196c6200195860608501936200192d8567030303030303030360c41b9052565b6080860199808b5152808a8c5101528b8b510152519360a08601948551525160018060c01b03191690565b83516001600160c01b031990911690880152565b8088835101528060608351015262001994620019898c516200036a565b6080845101620011dd565b620019af620019a48c516200036a565b60a0845101620011dd565b878b0196875160c0845101528160e084510152519161010092838251015261012090828282510152620019f3620019e788516200036a565b610140835101620011dd565b600162001a0a62001a043362001216565b620016e4565b62001a158162000388565b0362001c3057508862001a283362001216565b01515b015143111562001b0d5750508362001adc62001afb979462001af197948b9a9762001ae59560c06200094e9f9e515151910190815152818d51510151828251015262001a7a8982510160019052565b7f5c5830cb21effb5e5e418334967efc0e664dc3f396f7f6c79a7593b2050ca29762001aad82518b51918291826200093c565b0390a15191015262001ad562001ace62001ac66200171b565b9c516200036a565b8c620011dd565b516200036a565b908901620011dd565b5190860152516200036a565b60608401620011dd565b4360808301525160a082015262003a4a565b85929199518051600019815101908a8682015191015115159062001b30620010b1565b9283528683015215158a82015262001b4891620027de565b9960e083019a8b5233865162001b5e906200036a565b9062001b6a916200257b565b8a515151920191825152828a51510151838351015287825101528051875162001b958192826200093c565b037f3cf1a4cd8fbb090f578da97ac12887496ec47e110561404ebddf04dfc0aa9a8891a15191015262001bc76200171b565b965162001bd4906200036a565b62001be09088620011dd565b5162001bec906200036a565b62001bf9918701620011dd565b51908401525162001c0a906200036a565b62001c199060608401620011dd565b4360808301525160a08201526200094e9062003a4a565b5162001a2b565b600162001c4a82989796959851620016e4565b62001c558162000388565b1462001c65575b50505050505050565b86829151015161012095868601918252341562001c82906200234c565b6080958689015180518051600101908c8782015191015115159062001ca6620010b1565b9283528783015215158c82015262001cbe91620027de565b978a610140978884019a8b52868c0195865162001cdb906200036a565b62001ce7903362002764565b62001cf2906200236d565b51516001600160a01b0316865162001d0a906200036a565b62001d15906200036a565b62001d2a916001600160a01b0316146200238e565b60608c0198895162001d3c906200036a565b62001d47906200036a565b331462001d5490620023af565b8161016086019360008051602062004f938339815191529485815261018088019562001d8a8767030303030303030360c41b9052565b6101a0890180518290528051909d018190528c51830152516101c0880180519190915294516001600160c01b03191685516001600160c01b0319909116908b015284510152818351606001528c5162001de3906200036a565b8b8451019062001df391620011dd565b8c5162001e00906200036a565b835160a0019062001e1191620011dd565b8d8d01988951845160c0015282845160e001525183516101000152818484510152865162001e3f906200036a565b835162001e4d9201620011dd565b62001e583362001216565b62001e6390620016e4565b9062001e6f8262000388565b50600114600014916101e09162001ea0936200206257508c62001e923362001216565b01515b015143119201918252565b80511562001f6a5762001f4c959362001f2d62001f5d9b9462001f0c62001f4298958b62001f058760008051602062004f7383398151915262001efc62001eeb62001f369b51151590565b8d5190151581529081906020820190565b0390a151151590565b1515910152565b62001ad562001f2662001f1e6200171b565b9d516200036a565b8d620011dd565b908a01620011dd565b5190870152516200036a565b60608501620011dd565b43908301525160a082015262003a4a565b3880808080808062001c5c565b95809594939899979633845162001f81906200036a565b9062001f8d916200257b565b80518951901515815260008051602062004f7383398151915290602090a151151591015262001fbb6200171b565b975162001fc8906200036a565b62001fd49089620011dd565b5162001fe0906200036a565b62001fee90888801620011dd565b51848701525162001fff906200036a565b6200200e9060608701620011dd565b4390850152519182519160001983510192818382015191015115159262002034620010b1565b948552840152901515908201526200204c91620027de565b60a08201526200205c9062003a4a565b62001f5d565b5162001e95565b90506001541438620017f8565b156200207e57565b60405163100960cb60e01b8152602b6004820152602490fd5b156200209f57565b60405163100960cb60e01b8152602c6004820152602490fd5b15620020c057565b60405163100960cb60e01b8152602d6004820152602490fd5b15620020e157565b60405163100960cb60e01b8152602e6004820152602490fd5b156200210257565b60405163100960cb60e01b8152602f6004820152602490fd5b156200212357565b60405163100960cb60e01b815260306004820152602490fd5b156200214457565b60405163100960cb60e01b8152600b6004820152602490fd5b156200216557565b60405163100960cb60e01b8152600c6004820152602490fd5b156200218657565b60405163100960cb60e01b8152600d6004820152602490fd5b15620021a757565b60405163100960cb60e01b8152600e6004820152602490fd5b15620021c857565b60405163100960cb60e01b8152600f6004820152602490fd5b15620021e957565b60405163100960cb60e01b815260106004820152602490fd5b156200220a57565b60405163100960cb60e01b815260116004820152602490fd5b156200222b57565b60405163100960cb60e01b815260126004820152602490fd5b156200224c57565b60405163100960cb60e01b815260136004820152602490fd5b156200226d57565b60405163100960cb60e01b815260146004820152602490fd5b156200228e57565b60405163100960cb60e01b815260156004820152602490fd5b15620022af57565b60405163100960cb60e01b815260166004820152602490fd5b15620022d057565b60405163100960cb60e01b815260176004820152602490fd5b15620022f157565b60405163100960cb60e01b815260186004820152602490fd5b156200231257565b60405163100960cb60e01b815260196004820152602490fd5b156200233357565b60405163100960cb60e01b8152601a6004820152602490fd5b156200235457565b60405163100960cb60e01b8152601f6004820152602490fd5b156200237557565b60405163100960cb60e01b815260206004820152602490fd5b156200239657565b60405163100960cb60e01b815260216004820152602490fd5b15620023b757565b60405163100960cb60e01b815260226004820152602490fd5b15620023d857565b60405163100960cb60e01b8152601b6004820152602490fd5b15620023f957565b60405163100960cb60e01b8152601c6004820152602490fd5b156200241a57565b60405163100960cb60e01b8152601d6004820152602490fd5b156200243b57565b60405163100960cb60e01b8152601e6004820152602490fd5b156200245c57565b60405163100960cb60e01b815260236004820152602490fd5b156200247d57565b602460405163100960cb60e01b8152816004820152fd5b156200249c57565b60405163100960cb60e01b815260256004820152602490fd5b15620024bd57565b60405163100960cb60e01b815260266004820152602490fd5b15620024de57565b60405163100960cb60e01b815260296004820152602490fd5b15620024ff57565b60405163100960cb60e01b8152602a6004820152602490fd5b156200252057565b60405163100960cb60e01b815260276004820152602490fd5b156200254157565b60405163100960cb60e01b815260286004820152602490fd5b156200256257565b60405163100960cb60e01b815260316004820152602490fd5b60008091620025e9938260405191602083019263a9059cbb60e01b845260018060a01b0380921660248201526001604482015260448152620025bd8162000fbb565b5193165af1620025d8620025d062002632565b80926200269d565b506020808251830101910162002686565b156200016557565b60009190620025e993838093604051602081019363a9059cbb60e01b855260018060a01b038093166024830152604482015260448152620025bd8162000fbb565b3d1562002681573d906001600160401b03821162002671575b6040519162002665601f8201601f19166020018462000fd7565b82523d6000602084013e565b6200267b62000eec565b6200264b565b606090565b908160209103126200016557620016f090620015ba565b15620026a65790565b805115620026b657805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15620026d85790565b805115620026e857805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b156200270a5790565b8051156200271a57805190602001fd5b60405163100960cb60e01b815260036004820152602490fd5b156200273c5790565b8051156200274c57805190602001fd5b60405163100960cb60e01b8152600480820152602490fd5b6000620016f0928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201526001606482015260648152620027ac8162000f67565b5193165af1620025d8620027bf62002632565b8092620026cf565b50634e487b7160e01b600052601160045260246000fd5b9190620027ea62001450565b9260005b60018110620027fd5750508252565b806200280c60019284620016f3565b51620028198288620016f3565b52620028268187620016f3565b50600019811462002839575b01620027ee565b62002843620027c7565b62002832565b60405190620028588262000f9f565b60405160a083620028698362000f83565b60009283815281528260208201528260408201526040516200288b8162000f83565b83815260608201528260808201520152565b9092916040602060809260a085019660018060a01b0316855280518286015201518051620028cb8162000388565b828501526020810151516060850152015151910152565b6101808183031262000165576200298b620028fc620010f0565b926200290883620015ad565b84526200291860208401620015ad565b60208501526200292b60408401620015ad565b604085015260608301516060850152608083015160808501526200295260a08401620015ad565b60a08501526200296560c08401620015ba565b60c085015260e083015160e08501526101008084015190850152610120809301620015c8565b9082015290565b506040513d6000823e3d90fd5b6001600160f01b031990911681526001600160a01b039091166020820152604081019190915260600190565b60405190620029da8262000f4a565b8160008082528060208301528060408301528060608301528060808301528060a08301528060c08301528060e083015280610100830152610120820152610140620011d862001450565b9062002a2f62002849565b9162002a4b62002a45620001b860045460ff1690565b62002454565b6040927f1c8f2e564c94d8221d07d2ba9330d0f0b8911f2bba36fa17fbca18757fd94ce684518062002a7f8533836200289d565b0390a1600062002a93600a82541462002475565b62002a9d62000ffb565b9362002ab4602095868082518301019101620028e2565b9362002acd815180159081156200306d575b5062002494565b608091868387019262002ae384514310620024b5565b0162002af08151620016e4565b62002afb8162000388565b62002d0a578762002b159151015180875251341462002518565b84515162002b2a60e088019182511062002539565b60c08701511562002c6857508762002c1362002c1c9262002b906200094e9b8a019160008051602062004fb383398151915262002b7862002b6c85516200036a565b87519182918262000bc2565b0390a18462002b8884516200036a565b9101620011dd565b60008051602062004fd383398151915262002bc4848a0162002bb6816129a160f11b9052565b516001600160f01b03191690565b8951519062002bda86519283923390846200299f565b0390a162001ad562002beb620029cb565b9a62002bfc62001f268c516200036a565b62002c0a818c01516200036a565b908c01620011dd565b908801620011dd565b60608501516060870152519085015262002c3a3360a08601620011dd565b60c0840152515160e083015261010043818401528101519061012091828401520151610140820152620033d1565b9762002c1362002c1c92868080806200094e9e62002c8e620018bb8f60a001516200036a565b90519082821562002d00575bf11562002cf0575b62002cca838a019160008051602062004fb383398151915262002b7862002b6c85516200036a565b60008051602062004fd383398151915262002bc48b8a0162002bb6816129a160f11b9052565b62002cfa62002992565b62002ca2565b506108fc62002c9a565b600162002d21829a939899949596979a51620016e4565b62002d2c8162000388565b1462002d3e575b505050505050505050565b81905101519560609262002d5b848b0198808a52513414620024d6565b85818a019a62002d70620018bb8d516200036a565b3303620030625762002d8a8a515160e08d015114620024f7565b888b62002d9a60c0820151151590565b1562002eec57505060a091500162002db6816129a160f11b9052565b516001600160f01b03191688515184519182913362002dd692846200299f565b0360008051602062004fd383398151915291a182890191825162002dfa906200036a565b845162002e0981928262000bc2565b0360008051602062004fb383398151915291a184835162002e2a906200036a565b91019062002e3891620011dd565b62002e42620029cb565b99895162002e50906200036a565b62002e5c908c620011dd565b5162002e68906200036a565b62002e75918b01620011dd565b5162002e81906200036a565b62002e8e918901620011dd565b8581015190870152519085015262002eaa3360a08601620011dd565b60c0840152515160e08301526101004381840152810151906101209182840152015161014082015262002edd90620033d1565b38808080808080808062002d33565b81808260e062002f05620018bb60a0859701516200036a565b9101519082821562003058575bf11562003048575b6129a160f11b9101819052885151845191829162002f3b913390846200299f565b0360008051602062004fd383398151915291a182890191825162002f5f906200036a565b845162002f6e81928262000bc2565b0360008051602062004fb383398151915291a184835162002f8f906200036a565b91019062002f9d91620011dd565b62002fa7620029cb565b99895162002fb5906200036a565b62002fc1908c620011dd565b5162002fcd906200036a565b62002fda918b01620011dd565b5162002fe6906200036a565b62002ff3918901620011dd565b858101519087015251908501526200300f3360a08601620011dd565b60c0840152515160e0830152610100438184015281015190610120918284015201516101408201526200304290620033d1565b62002edd565b6200305262002992565b62002f1a565b506108fc62002f12565b62002d8a89620024f7565b9050600154143862002ac6565b60405190620030898262000f67565b6000608083828152826020820152620030a162001450565b6040820152620030b062001450565b60608201520152565b818110620030c5575050565b60008155600101620030b9565b620030df60025462000eaf565b80620030e85750565b601f8111600114620030fc57506000600255565b60026000526200314490601f0160051c60008051602062004f53833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf620030b9565b6000602081208160025555565b6040519061014082016001600160401b03811183821017620031b4575b6040528160008082528060208301528060408301528060608301528060808301528060a08301528060c08301528060e0830152610100820152610120620011d862001450565b620031be62000eec565b6200316e565b906000905b60018210620031d757505050565b6020606082620031eb600194875162000921565b01930191019091620031c9565b6200094e9092919261018081019362003213828251620003a9565b6200322760208201516020840190620003a9565b6200323b60408201516040840190620003a9565b60608101516060830152608081015160808301526200326360a082015160a0840190620003a9565b60c08181015115159083015260e081015160e0830152610100808201519083015261012080910151910190620031c4565b90601f8211620032a2575050565b6200094e9160026000526020600020906020601f840160051c83019310620032d3575b601f0160051c0190620030b9565b9091508190620032c5565b80519091906001600160401b038111620033c1575b6200330b816200330560025462000eaf565b62003294565b602080601f83116001146200334a57508192936000926200333e575b50508160011b916000199060031b1c191617600255565b01519050388062003327565b6002600052601f1983169490919060008051602062004f53833981519152926000905b878210620033a85750508360019596106200338e575b505050811b01600255565b015160001960f88460031b161c1916905538808062003383565b806001859682949686015181550195019301906200336d565b620033cb62000eec565b620032f3565b620033db6200307a565b60808201918251916101209283830151106000146200350057506200094e92620034eb92610140620034fa936200341162003151565b93620034296200342283516200036a565b86620011dd565b620034466200343c60208401516200036a565b60208701620011dd565b620034636200345960408401516200036a565b60408701620011dd565b60608201516060860152516080850152620034906200348660a08301516200036a565b60a08601620011dd565b620034ab620034a260c0830151151590565b151560c0860152565b60e081015160e08501526101008082015190850152015190820152620034d1600a600055565b620034db43600155565b60405192839160208301620031f8565b03601f19810183528262000fd7565b620032de565b925090506200353860c08201620035178151151590565b156200385357600084525b8051156200383657600060208501525b51151590565b156200362d5780620035e0610140620035e8930162001868815193845162003588602082015160409788958680950151151562003574620010b1565b936000855260208501528584019015159052565b97019687520194620035aa6200359f87516200036a565b835151519062003910565b51620018688151926020840151905151519003858451940151151590620035d0620010b1565b9485526020850152151585840152565b510151151590565b1562003608575060008055620035fe6000600155565b6200094e620030d2565b620036186200361e91516200036a565b62003963565b60008055620035fe6000600155565b9081600080808062003648620018bb6200094e98516200036a565b8651908282156200382c575bf1156200381c575b600080808062003671620018bb86516200036a565b60208701519082821562003812575bf11562003802575b610100610140820191620037ef620037e5620036d1855180519062001868604060208401519301511515620036bc620010b1565b93600085526020850152604084019015159052565b94606087019586527fa51864ea900ebd97f0b16fcc7644e6db6fac23390f11a16189f33225b17a5c996200374d608060408701996200373c620037158c516200036a565b9560a08a01966200372788516200036a565b91515151916001600160a01b031690620025f1565b61414560f01b910190815262002bb6565b6200375983516200036a565b60e0870151604080516001600160f01b03199490941684526001600160a01b039290921660208401529082015260016060820152608090a1620037a086515151156200255a565b620037d4620037ca620037b26200171b565b9862001ad5620037c388516200036a565b8b620011dd565b60208901620011dd565b60608401516040880152516200036a565b60608601620011dd565b015160808301525160a082015262003a4a565b6200380c62002992565b62003688565b506108fc62003680565b6200382662002992565b6200365c565b506108fc62003654565b6200384860e084015185519062003875565b602085015262003532565b6200386d6200386660e08501516200388d565b6064900490565b845262003522565b908103908111620038835790565b620016f0620027c7565b906000918015908115620038a5575b50156200016557565b9092507f0888888888888888888888888888888888888888888888888888888888888888811160011662003900575b80601e0292620038ea578204601e14386200389c565b634e487b7160e01b600052601260045260246000fd5b6200390a620027c7565b620038d4565b60008091620025e993826040516020810192630852cd8d60e31b8452602482015260248152620039408162000f2e565b51926001600160a01b03165af1620025d86200395b62002632565b809262002701565b600080620039ab9260405182602082019163083197ef60e41b8352600481526200398d8162000f03565b51926001600160a01b03165af1620039a462002632565b9062002733565b50565b60405190620039bd8262000f83565b81620039c862001450565b9052565b60405190620039db8262000f67565b81600081526000602082015260006040820152600060608201526080620011d862001450565b6200094e9092919260808060e083019560018060a01b038082511685528060208301511660208601526040820151604086015260608201511660608501520151910190620031c4565b62003a54620039ae565b9060a081018051928351938451906020958681015180931060001462003b0857505050506200094e92620034fa9162003adb620037e5606062003a96620039cc565b9662003aae62003aa782516200036a565b89620011dd565b62003ac962003ac0878301516200036a565b878a01620011dd565b6040810151604089015201516200036a565b51608084015262003aec6009600055565b62003af643600155565b620034eb604051938492830162003a01565b86620035e89662003b4860409795620035e0979a95620018688a62001868970151151562003b35620010b1565b9360008552878501528b84019015159052565b8952019662003b6762003b5c89516200036a565b855151519062003910565b51918251938185015190515151900386855195015115159162003b89620010b1565b958652850152151585840152565b9190826020910312620001655760405162003bb28162000f83565b91358252565b6040519062003bc78262000f9f565b600060a08382815282602082015262003bdf62001450565b604082015262003bee62001450565b606082015262003bfd62001450565b60808201520152565b6001600160a01b0390911681529051602082015260400190565b51906001600160c01b0319821682036200016557565b9190826060910312620001655760405162003c518162000f2e565b604080829480518452602081015160208501520151910152565b9061018082820312620001655762003cf89061012062003c8a62001111565b9362003c978382620015c8565b855262003ca760608201620015ad565b60208601526080810151604086015260a0810151606086015262003cce60c0820162003c20565b608086015260e081015160a086015262003cec6101008201620015ad565b60c08601520162003c36565b60e082015290565b92919060405193602085015260408401526060830152606082526200094e8262000fbb565b949362003d6b60009462003d5c60a09562003d4d62003d7a9660c08c5260c08c019062000a99565b908a820360208c015262000a99565b9088820360408a015262000a99565b90868203606088015262000a99565b93600160808201520152565b6040519060e082016001600160401b0381118382101762003dd9575b6040528160c060009182815282602082015282604082015282606082015282608082015262003dd062001450565b60a08201520152565b62003de362000eec565b62003da2565b91909161010060c061012083019460018060a01b038082511685526020820151602086015280604083015116604086015260608201516060860152608082015116608085015262003e4360a082015160a0860190620031c4565b0151910152565b61012081830312620001655760405191610100919062003ed29060e085016001600160401b0381118682101762003ee1575b604052825162003e8c8162000376565b85526020830151602086015262003ea660408401620015ad565b60408601526060830151606086015262003ec360808401620015ad565b608086015260a08301620015c8565b60a0840152015160c082015290565b62003eeb62000eec565b62003e7c565b90607882019182811162003f09575b82106200016557565b62003f13620027c7565b62003f00565b600211156200016557565b9190826020910312620001655760405162003f3f8162000f83565b91358262003f4d8262000376565b5256fe608060405234620004b65762001002803803806200001d81620006a4565b92833981019060c081830312620004b65780516001600160401b0390818111620004b657836200004f918401620006ca565b9260209384840151838111620004b657826200006d918601620006ca565b936040810151848111620004b6578362000089918301620006ca565b92606082015190858211620004b657620000a5918301620006ca565b9560a0608083015192015195835192868411620005a4576003958654946001968787811c9716801562000699575b8688101462000683578190601f978881116200062d575b508690888311600114620005c657600092620005ba575b5050600019828a1b1c191690871b1787555b8251888111620005a45760049384548881811c9116801562000599575b8782101462000584579081888493116200052e575b508690888311600114620004c757600092620004bb575b5050600019828a1b1c191690871b1783555b600580546001600160a01b03191633908117825590929015620004b65762000199816002546200073c565b60025533600052600085526040600020620001b68282546200073c565b905560405190815260007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef863393a3805190888211620004a1576006548781811c9116801562000496575b8682101462000481579081878493116200042c575b508590878311600114620003c357600092620003b7575b505060001982891b1c191690861b176006555b8851968711620003a257600754918583811c9316801562000397575b8484101462000382575083821162000338575b505080918511600114620002c85750839291839160ff97600095620002bc575b50501b92600019911b1c1916176007555b1660ff1960085416176008556040516108a19081620007618239f35b0151935038806200028f565b91939290601f19841696600760005283600020936000905b898210620003205750508460ff981062000305575b50505050811b01600755620002a0565b01519060f884600019921b161c1916905538808080620002f5565b808885978294968601518155019601930190620002e0565b6007600052826000209084808901821c830193858a1062000378575b01901c019084905b8281106200036b57506200026f565b600081550184906200035c565b9350829362000354565b602290634e487b7160e01b6000525260246000fd5b92607f16926200025c565b604182634e487b7160e01b6000525260246000fd5b0151905038806200022d565b90889350601f198316916006600052876000209260005b89828210620004155750508411620003fc575b505050811b0160065562000240565b0151600019838b1b60f8161c19169055388080620003ed565b8385015186558c97909501949384019301620003da565b90915060066000528560002087808501861c82019288861062000477575b918a918695949301871c01915b8281106200046757505062000216565b600081558594508a910162000457565b925081926200044a565b602285634e487b7160e01b6000525260246000fd5b90607f169062000201565b604184634e487b7160e01b6000525260246000fd5b600080fd5b0151905038806200015c565b90899350601f1983169187600052886000209260005b8a828210620005175750508411620004fe575b505050811b0183556200016e565b0151600019838c1b60f8161c19169055388080620004f0565b8385015186558d97909501949384019301620004dd565b90915085600052866000208880850160051c8201928986106200057a575b918b91869594930160051c01915b8281106200056a57505062000145565b600081558594508b91016200055a565b925081926200054c565b602286634e487b7160e01b6000525260246000fd5b90607f169062000130565b634e487b7160e01b600052604160045260246000fd5b01519050388062000101565b90899350601f198316918b600052886000209260005b8a828210620006165750508411620005fd575b505050811b01875562000113565b0151600019838c1b60f8161c19169055388080620005ef565b8385015186558d97909501949384019301620005dc565b90915089600052866000208880850160051c82019289861062000679575b918b91869594930160051c01915b82811062000669575050620000ea565b600081558594508b910162000659565b925081926200064b565b634e487b7160e01b600052602260045260246000fd5b96607f1696620000d3565b6040519190601f01601f191682016001600160401b03811183821017620005a457604052565b919080601f84011215620004b65782516001600160401b038111620005a45760209062000700601f8201601f19168301620006a4565b92818452828287010111620004b65760005b8181106200072857508260009394955001015290565b858101830151848201840152820162000712565b919082018092116200074a57565b634e487b7160e01b600052601160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde031461065757508163095ea7b31461062d57816318160ddd1461060e57816323b872dd14610587578163313ce56714610565578163392f37e9146104a9578163395093511461045957816342966c68146103c35781635600f04f1461030757816370a08231146102d057816383197ef0146102a057816395d89b411461019f57508063a457c2d714610145578063a9059cbb146101155763dd62ed3e146100ca57600080fd5b34610111578060031936011261011157806020926100e661075a565b6100ee610775565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b503461011157806003193601126101115760209061013e61013461075a565b60243590336107ae565b5160018152f35b503461011157806003193601126101115761015e61075a565b338352600160209081528284206001600160a01b03831685529052818320549092602435919082821061019c57509261013e91602094039033610813565b80fd5b838334610111578160031936011261011157805190828454600181811c90808316928315610296575b602093848410811461028357838852908115610267575060011461022f575b505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b0390f35b634e487b7160e01b815260418552602490fd5b919250868652828620918387935b83851061025357505050508301018580806101e7565b80548886018301529301928490820161023d565b60ff1916878501525050151560051b84010190508580806101e7565b634e487b7160e01b895260228a52602489fd5b91607f16916101c8565b833461019c578060031936011261019c576005546001600160a01b0316903382900361019c5760025461019c5750ff5b5050346101115760203660031901126101115760209181906001600160a01b036102f861075a565b16815280845220549051908152f35b83833461011157816003193601126101115780519082600654600181811c908083169283156103b9575b602093848410811461028357838852908115610267575060011461038057505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060068652828620918387935b8385106103a557505050508301018580806101e7565b80548886018301529301928490820161038f565b91607f1691610331565b82843461019c57602036600319011261019c576005546001600160a01b0316833533829003610455578115610455578183528260205283832054818110610451578190038484205560025481810390811161043e57602095506000805160206108758339815191529186916002558551908152a35160018152f35b634e487b7160e01b845260118652602484fd5b8380fd5b8280fd5b50503461011157806003193601126101115761013e6020926104a261047c61075a565b338352600186528483206001600160a01b0382168452865291849020546024359061078b565b9033610813565b83833461011157816003193601126101115780519082600754600181811c9080831692831561055b575b602093848410811461028357838852908115610267575060011461052257505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060078652828620918387935b83851061054757505050508301018580806101e7565b805488860183015293019284908201610531565b91607f16916104d3565b50503461011157816003193601126101115760209060ff600854169051908152f35b505034610111576060366003190112610111576105a261075a565b6105aa610775565b6001600160a01b03821684526001602081815284862033875290528385205460443595929392909182016105e7575b60208561013e8887876107ae565b85821061019c575091849161060460209661013e95033383610813565b91948193506105d9565b5050346101115781600319360112610111576020906002549051908152f35b50503461011157806003193601126101115760209061013e61064d61075a565b6024359033610813565b8490843461045557826003193601126104555782600354600181811c90808316928315610707575b60209384841081146102835783885290811561026757506001146106ce57505050829003601f01601f19168201926001600160401b0384118385101761021c5750829182610218925282610711565b91925060038652828620918387935b8385106106f357505050508301018580806101e7565b8054888601830152930192849082016106dd565b91607f169161067f565b6020808252825181830181905290939260005b82811061074657505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610724565b600435906001600160a01b038216820361077057565b600080fd5b602435906001600160a01b038216820361077057565b9190820180921161079857565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03908116918215610770571691821561077057600082815280602052604081205482811061011157916040602092826000805160206108758339815191529503828220558681522061080882825461078b565b9055604051908152a3565b6001600160a01b0390811691821561077057169182156107705760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c6343000810000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace270480b7e8f93db2e1a91632fb26fb70b6d9f9ce50077dbbaba9bba7665c3521303030303030303030303030303030303030303030303030303030303030303074380bc1535ee29ee223aa153d898c9446be8a522264babe31cde5f8b0b003491f3d593944dadd167c498ac6f84980a3f3b765b0bc28b60e106e99cb0c9d434ba164736f6c6343000810000a`,
  BytecodeLen: 22760,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './Market.rsh:55:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './Market.rsh:86:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './Market.rsh:158:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './Market.rsh:158:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './Market.rsh:218:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './Market.rsh:218:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './Market.rsh:165:35:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './Market.rsh:94:35:after expr stmt semicolon',
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
  "Bidder_checkExpiry": Bidder_checkExpiry,
  "Bidder_makeBid": Bidder_makeBid,
  "Bidder_makePurchase": Bidder_makePurchase,
  "Bidder_makeSell": Bidder_makeSell,
  "Protocol": Protocol
  };
export const _APIs = {
  Bidder: {
    checkExpiry: Bidder_checkExpiry,
    makeBid: Bidder_makeBid,
    makePurchase: Bidder_makePurchase,
    makeSell: Bidder_makeSell
    }
  };
