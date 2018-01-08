<?php
	include 'connect.php';
	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 40;
	$cate = isset($_GET['cate']) ? $_GET['cate'] : '';

	$sql = 'select * from product';

	if($cate){
		$sql .= " where category=$cate";
	}

	$sql .= ' limit '. $qty*($page_no - 1) . ',' . $qty;

	// 获取查询结果
	$result = $conn->query($sql);

	// 使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);
	
	//释放查询结果集
    $result->close();

    // 格式化数据
    $res = array(
    	'page_no'=>$page_no,
    	'qty'=>$qty,
    	'total'=>$conn->query('select count(*) from product')->fetch_row()[0],
    	'data'=>$row,
    );

    //把结果输出到前台
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
	//关闭连接
	$conn->close();
?>