import {useState, useEffect} from 'react';

export default function usePromise(promiseCreator, deps){
    //대기중 | 완료 | 실패에 대한 상태 관리
    
    const [loading, setLoading] = useState(false); 
    const [resolved, setResolved] = useState(null); 
    const [error, setError] = useState(null);
    
    useEffect(()=> {
        const process = async () => {
            setLoading(true);
            try {
                const resolved = await promiseCreator();
                setResolved(resolved);
            }catch(e){
                setError(e);
            }
            setLoading(false);
        };
        process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)

    return [loading, resolved, error];
};

/* 
    usePromise ? 

    Promise의 대기중, 완료 결과, 실패 결과에 대한 상태들을 관리하며 usePromise의 의존 배열 deps를 파라미터로 받아오는데, 이 배열은 
    usePromise 내부에서 사용한 useEffect의 의존 배열로 설정되는데 이 부분에서 ESLint 경고가 발생한다.
    이 경고는 ESLint 규칠을 무시하도록 하는 주석을 작성하여 해결하면 된다.


*/