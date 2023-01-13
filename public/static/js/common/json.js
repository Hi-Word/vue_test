
function toMyJSONString(obj) {
	 var m = {
	        '\b': '\\b',
	        '\t': '\\t',
	        '\n': '\\n',
	        '\f': '\\f',
	        '\r': '\\r',
	        '"' : '\\"',
	        '\\': '\\\\'
	    };
	if (/["\\\x00-\x1f]/.test(obj)) {
	    return '"' + obj.replace(/[\x00-\x1f\\"]/g, function (a) {
	        var c = m[a];
	        if (c) {
	            return c;
	        }
	        c = a.charCodeAt();
	        return '\\u00' +
	            Math.floor(c / 16).toString(16) +
	            (c % 16).toString(16);
	    }) + '"';
	}
	return '"' + obj + '"';
};

function getMyJsonString(obj) {
    var a = [],     // The array holding the partial texts.
        k,          // The current key.
        v;          // The current value.
    for (k in obj) {
        if (typeof k === 'string' &&
                Object.prototype.hasOwnProperty.apply(obj, [k])) {
            v = obj[k];
            switch (typeof v) {
            case 'object':

                if (v) {
                    if (typeof toMyJSONString(v) === 'function') {
                        a.push(toMyJSONString(k) + ':' + toMyJSONString(v));
                    }
                } else {
                    a.push(toMyJSONString(k) + ':null');
                }
                break;

            case 'string':
            case 'number':
            case 'boolean':
                a.push(toMyJSONString(k) + ':' + toMyJSONString(v));
            }
        }
    }
    return '{' + a.join(',') + '}';
}